import * as firebase from "firebase";
import firestore from "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBP0TmEBg_xVYCax0RjKGBc_cm0V-J-lUk",
    authDomain: "todoapp-37ba1.firebaseapp.com",
    projectId: "todoapp-37ba1",
    storageBucket: "todoapp-37ba1.appspot.com",
    messagingSenderId: "321828443367",
    appId: "1:321828443367:web:3ec1f7e8a0b94118bafe42"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore();
  
  export default firebase;