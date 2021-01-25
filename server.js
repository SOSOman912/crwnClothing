const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const {WebhookClient , Card} = require('dialogflow-fulfillment');
const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "dickylam",
  host: "localhost",
  database: "crwnclothing",
  port: "5432"
})

pool.on('error', (err, client) => {
  console.error('Error:',err);
})

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.post('/chatBot', (request, response) => {
        dialogflowFulfillment(request, response);
})

const dialogflowFulfillment = async(request, response) => {

  const agent = new WebhookClient({request, response})
    const Welcome = (agent) => {
      var possibleResponse = [
      "Hello! How can I help you?",
      "Good day! What can I do for you today?",
      "Greetings! how can I assist?"
      ]

      var pick = Math.floor( Math.random() * possibleResponse.length );

      var response = possibleResponse[pick];

      agent.add(response);
    }

    const Lookforproduct = (agent) => {
      const content = request.body;
      const requirement = {
          shoestype: content.queryResult.parameters.shoestype
      }

      var possibleResponse = [
      'Of course! Is there any or more requirement?',
      `May I know is there any or more requirement on the ${requirement.shoestype} ?`
      ]

      var pick = Math.floor (Math.random() * possibleResponse.length );

      var response = possibleResponse[pick];
      
      agent.add(response);
    }

    const NoForLookforproduct = async (agent) => {  

      const content = request.body.queryResult.outputContexts[1].parameters;
      const requirement = {
          shoestype: content.shoestype,
          SportType: content.SportType,
          Shoesbrand: content.Shoesbrand,
          gender: content.gender
      }

      const productdata = await RetrievingDataFromPostgreSQL();
      if (requirement.shoestype != null) {
        var array1 = productdata.filter(data => {
          if (data.product_name.toLowerCase().includes(requirement.shoestype) == true) {
            return data;
          }
        })
      } else {
        var array1 = productdata;
      }

      if (requirement.SportType != null) {
        var array2 = array1.filter(data => {
          if (data.product_name.toLowerCase().includes(requirement.SportType) == true) {
            return data;
          }
        })
      } else {
        var array2 = array1;
      }

      if (requirement.Shoesbrand != null) {
        var array3 = array2.filter(data => {
          if (data.product_name.toLowerCase().includes(requirement.Shoesbrand) == true) {
            return data;
          }
        })
      } else {
        var array3 = array2;
      }

      if (requirement.Shoesbrand != null) {
        var array4 = array3.filter(data => {
          if (data.gender.toLowerCase().includes(requirement.gender) == true) {
            return data;
          }
        })
      } else {
        var array4 = array3;
      }

      var Itemtoshow = 0;
      var Imagetoshow = array4[Itemtoshow].images.split(',');

      agent.add(new Card({
        title: array4[Itemtoshow].product_name,
        imageUrl: Imagetoshow[0],
      }));
      };

    let intentMap = new Map();
    intentMap.set("Welcome", Welcome);
    intentMap.set("Lookforproduct", Lookforproduct);
    intentMap.set("Lookforproduct - no", NoForLookforproduct);
    agent.handleRequest(intentMap)
  }

app.get('/getData', async(req, res) => {
    
    var ResData = await RetrievingDataFromPostgreSQL();

    res.send(ResData);  

})

const RetrievingDataFromPostgreSQL = async() => {
    const query = `SELECT * FROM productinformation`;
  try {
    
    const client = await pool.connect();
    const res = await client.query(query);
    return res.rows;

  } catch (err) {
    console.log(err);
  }
}
