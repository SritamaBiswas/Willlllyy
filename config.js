  import firebase from 'firebase';
  require("@firebase/firestore");
  var firebaseConfig = {
    apiKey: "AIzaSyDSZxfgdChnzlu5ht5Vja8yxd1nJ6xtzpQ",
    authDomain: "willy-afb8d.firebaseapp.com",
    projectId: "willy-afb8d",
    databaseURL:"https://-afb8d.firebaseapp.com",
    storageBucket: "willy-afb8d.appspot.com",
    messagingSenderId: "187387292152",
    appId: "1:187387292152:web:b5f46825134f0d6d458e0d",
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
      }
      export default firebase.firestore();