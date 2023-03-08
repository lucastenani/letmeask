import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQnnT4ll8j6P9kuHFxl_Q5h88BMkNVxQ0",
  authDomain: "letmeask-30ed2.firebaseapp.com",
  projectId: "letmeask-30ed2",
  storageBucket: "letmeask-30ed2.appspot.com",
  messagingSenderId: "374168676742",
  appId: "1:374168676742:web:f1b38d40422ddbe74a6407",
  dataBaseUrl: "https://letmeask-30ed2-default-rtdb.firebaseio.com",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
