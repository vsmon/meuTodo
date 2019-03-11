import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBeup8TEbW4DEVW4MFN4_-qmlTFUhNm64c",
    authDomain: "projeto-firebase-f1b4d.firebaseapp.com",
    databaseURL: "https://projeto-firebase-f1b4d.firebaseio.com",
    projectId: "projeto-firebase-f1b4d",
    storageBucket: "projeto-firebase-f1b4d.appspot.com",
    messagingSenderId: "988389161409"
  };
  firebase.initializeApp(config);

  export default firebase;
