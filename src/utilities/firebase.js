import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCTTBw2mX1omuXPX_gcysUUyJeoN0v7i-o",
  authDomain: "name-this-dog.firebaseapp.com",
  databaseURL: "https://name-this-dog-default-rtdb.firebaseio.com",
  projectId: "name-this-dog",
  storageBucket: "name-this-dog.appspot.com",
  messagingSenderId: "884017592247",
  appId: "1:884017592247:web:43aac7d46d8533bb78da32",
  measurementId: "G-53X57CSHNG",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
