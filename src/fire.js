  // Your web app's Firebase configuration
  import firebase from 'firebase';
  
  var firebaseConfig = {
    apiKey: "AIzaSyAJrchf_nPEqmjx8jdMnZ86FSNrUcAO4I0",
    authDomain: "twfsample-1bb15.firebaseapp.com",
    projectId: "twfsample-1bb15",
    storageBucket: "twfsample-1bb15.appspot.com",
    messagingSenderId: "948277279584",
    appId: "1:948277279584:web:c3b2b8f1beb6eb80577c05"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;