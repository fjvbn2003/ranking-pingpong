import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



// Initialize Firebase
var config = {
    apiKey: "AIzaSyAlP6zYhvjzPIGsj2FYeYvLMw5D3IoqBMo",
    authDomain: "react-rankpong.firebaseapp.com",
    databaseURL: "https://react-rankpong.firebaseio.com",
    projectId: "react-rankpong",
    storageBucket: "react-rankpong.appspot.com",
    messagingSenderId: "271586261523"
  };
  firebase.initializeApp(config);