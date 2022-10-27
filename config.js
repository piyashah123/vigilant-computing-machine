import firebase from "firebase";
require("@firebase/firestore")

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC78nkb86ZEMF9lWM9fEZ6tCj5kd8YUfJU",
  authDomain: "e-library-3b312.firebaseapp.com",
  projectId: "e-library-3b312",
  storageBucket: "e-library-3b312.appspot.com",
  messagingSenderId: "264035347356",
  appId: "1:264035347356:web:15c16c9a5330ef5ef13659"
};
firebase.initializeApp(firebaseConfig);
export  default firebase.firestore;
