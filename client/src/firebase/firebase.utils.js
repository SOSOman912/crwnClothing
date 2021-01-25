import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyBsTCUdDmDdebUujFOLYE4ldWzjVWZDkm0",
    authDomain: "charismatic-age-301711.firebaseapp.com",
    projectId: "charismatic-age-301711",
    storageBucket: "charismatic-age-301711.appspot.com",
    messagingSenderId: "9738776260",
    appId: "1:9738776260:web:053daa12f3f7e2f6b16391",
    measurementId: "G-MJ7Y2L1MR7"
  };

  firebase.initializeApp(config);
  export const createUserProfileDocument = async (userAuth, additionalData) => {
  		 if (!userAuth) return;

  		 const userRef = firestore.doc(`users/${userAuth.uid}`);  

  		 const snapShot = await userRef.get();

  		 if(!snapShot.exists) {
  		 	const { displayName, email } = userAuth;
  		 	const createdAt = new Date();

  		 	try {
  		 		await userRef.set({
  		 			displayName, email, createdAt,
  		 			...additionalData
  		 		})
  		 	}catch (error ){
  		 		console.log('error creating user', error.message);
  		 	}
  		 }

  		 return userRef;
  };

  export const addCollectionAndDocument = async(collectionName, objects) => {
    const collectionRef = firestore.collection(collectionName);

    const batch = firestore.batch();
    objects.forEach(object => {
      var newDocRef = collectionRef.doc(object.title);
      // batch.set(newDocRef, {"title": object.title,"id": object.id});
      var MencollectionRef = newDocRef.collection("womens");
      for (var i = 0; i < object.womens.length / 4 ; i++){
          var DocRef = MencollectionRef.doc(object.womens[i].product_id);
          batch.set(DocRef, object.womens[i]);
      }

      // for (var k = object.mens.length / 2 + 1; k < object.mens.length / 2 + object.mens.length / 4 ; k++){
      //     var DocRef = MencollectionRef.doc(object.mens[k].product_id);
      //     batch.set(DocRef, object.mens[k]);
      // }
      // for (var l = object.mens.length / 2 + object.mens.length / 4 + 1; l < object.mens.length  ; l++){
      //     var DocRef = MencollectionRef.doc(object.mens[l].product_id);
      //     batch.set(DocRef, object.mens[l]);
      // }
    })

    return await batch.commit();
  } 





export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
