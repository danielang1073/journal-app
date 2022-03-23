import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBSlVnPitVtQScdK6II9sdD8bhSTgcQrwQ",
    authDomain: "react-app-curso-f3f01.firebaseapp.com",
    projectId: "react-app-curso-f3f01",
    storageBucket: "react-app-curso-f3f01.appspot.com",
    messagingSenderId: "102009539692",
    appId: "1:102009539692:web:7a4c818cf70e3303191c49"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase,
      
  }