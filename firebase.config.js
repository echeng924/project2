const firebase = require('firebase');

  var config = {
    apiKey: "AIzaSyAtJP7oUBdw5YXfY9OBbqT1S5EtPvLk1FU",
    authDomain: "roadtrip-app-1474472241721.firebaseapp.com",
    databaseURL: "https://roadtrip-app-1474472241721.firebaseio.com",
    storageBucket: "roadtrip-app-1474472241721.appspot.com",
    messagingSenderId: "334683545778"
  };

  firebase.initializeApp(config);


module.exports = firebase
