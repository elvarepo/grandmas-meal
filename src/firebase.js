

import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyC7tuw-XZfgR52mDDfR5Oyn2CHkEkiFRAs",
      authDomain: "grandmas-meal.firebaseapp.com",
      projectId: "grandmas-meal",
      storageBucket: "grandmas-meal.appspot.com",
      messagingSenderId: "933147377952",
      appId: "1:933147377952:web:593e70eacea07ee3285745",
      measurementId: "G-74MYTQ7M35"
    };
    
  
  const auth = firebase.auth();
  export {auth};
  
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   export {db, auth, provider};