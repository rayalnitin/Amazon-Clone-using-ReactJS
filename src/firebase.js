import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXUiuB5TMvermfGUP5aCbiEMInfLpWh20",
  authDomain: "clone-ae776.firebaseapp.com",
  projectId: "clone-ae776",
  storageBucket: "clone-ae776.appspot.com",
  messagingSenderId: "1031168068251",
  appId: "1:1031168068251:web:cc4d1b0db1aa15bd3b943e",
  measurementId: "G-S7X3E3VHD2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };