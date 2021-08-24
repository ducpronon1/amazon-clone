import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0fb6PCQxv3AMJslQ3czlG6cz7KI2Dfwg",
  authDomain: "clone-75409.firebaseapp.com",
  projectId: "clone-75409",
  storageBucket: "clone-75409.appspot.com",
  messagingSenderId: "1050211559099",
  appId: "1:1050211559099:web:5656a2f0da360cd0c0eb9e",
  measurementId: "G-ZC3KL3365D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
