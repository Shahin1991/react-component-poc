import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCEwrXDC0bRBTtGZ5UqAsiXCwvQvRLWT-M",
    authDomain: "mal-mak.firebaseapp.com",
    databaseURL: "https://mal-mak.firebaseio.com",
    projectId: "mal-mak",
    storageBucket: "mal-mak.appspot.com",
    messagingSenderId: "493010743081",
    appId: "1:493010743081:web:25ce64e366328dcc9a5138",
    measurementId: "G-G8BG0T4DLT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase;