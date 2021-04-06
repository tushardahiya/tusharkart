import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQBPoetAi6xFoyKd8Mz0H92bbSh9Nxdd4",
  authDomain: "tusharkart-6a0b4.firebaseapp.com",
  projectId: "tusharkart-6a0b4",
  storageBucket: "tusharkart-6a0b4.appspot.com",
  messagingSenderId: "794688185037",
  appId: "1:794688185037:web:e74eeb870c9578f9a67f84",
  measurementId: "G-J95XGVF69T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
