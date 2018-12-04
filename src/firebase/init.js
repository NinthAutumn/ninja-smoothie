import firebase from "firebase"
import "firebase/firestore"
var config = {
  apiKey: "AIzaSyDRKU3iKEsDUzpHymIMDCN76LtuoB3c8-k",
  authDomain: "lesson-4-smoothies.firebaseapp.com",
  databaseURL: "https://lesson-4-smoothies.firebaseio.com",
  projectId: "lesson-4-smoothies",
  storageBucket: "lesson-4-smoothies.appspot.com",
  messagingSenderId: "676264173183"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
})
//export firestore 
export default firebaseApp.firestore();
