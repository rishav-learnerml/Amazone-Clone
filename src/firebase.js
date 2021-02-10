import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfP1eaGACpecDZr69GzWq56TyYeDW3Az8",
    authDomain: "challenge-83575.firebaseapp.com",
    projectId: "challenge-83575",
    storageBucket: "challenge-83575.appspot.com",
    messagingSenderId: "894738019540",
    appId: "1:894738019540:web:90c9a4c94d4a0a30eab741",
    measurementId: "G-LE7KKXHG79"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};