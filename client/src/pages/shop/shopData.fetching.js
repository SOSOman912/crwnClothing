import axios from 'axios';

const fetchingDataFromServer = async() => {
	console.log("Start Fetching Data");
	
	const makeGetRequest = async() => {
		var res = await axios.get('/getData');
		
		let data = res.data;

		var CORENEOItems = [];

		var CORENEOObj = {id:1,title:'CORE / NEO',Items:CORENEOItems};

		var OriginalsItems = [];

		var OriginalsObj = {id:2,title:'ORIGINALS',Items:OriginalsItems};

		var SportsItems = [];

		var SportsObj = {id:3,title:'SPORT PERFORMANCE',Items:SportsItems};

			for (var j = 0 ; j < data.length -1; j++) {
				switch(data[j].brand) {
					case "CORE / NEO" :
						CORENEOItems.push(data[j]);
						break;
					case "ORIGINALS" :
						OriginalsItems.push(data[j]);
						break;
					case "SPORT PERFORMANCE" :
						SportsItems.push(data[j]);
						break;
					default:
						return data[j];
			}
		}
		var convertCollectiontomap = {CORENEO:CORENEOObj,ORIGINALS:OriginalsObj,SPORT_PERFORMANCE:SportsObj};

		return convertCollectiontomap;
	}	
	var result = await makeGetRequest();

	console.log(result);

	return result;
}

export default fetchingDataFromServer;