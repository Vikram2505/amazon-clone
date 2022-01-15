import firebase from "firebase/compat";

import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAtSzXdp6TKuS1RGb_DnOVGKVlrRjj3d7k",
  authDomain: "clone-e842b.firebaseapp.com",
  projectId: "clone-e842b",
  storageBucket: "clone-e842b.appspot.com",
  messagingSenderId: "781064961696",
  appId: "1:781064961696:web:9f2905cfea0a44ec6e13c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };