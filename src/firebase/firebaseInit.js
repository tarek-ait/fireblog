import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBs_7lWZOcMzSwsQqBDydu6t6rCZxhnVmc",
    authDomain: "fireblogs-e0f13.firebaseapp.com",
    projectId: "fireblogs-e0f13",
    storageBucket: "fireblogs-e0f13.appspot.com",
    messagingSenderId: "918896565216",
    appId: "1:918896565216:web:7329cc4757e830c1a9a985"
  };

  // initialize the application 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export{ timestamp };
  export default firebaseApp.firestore();
