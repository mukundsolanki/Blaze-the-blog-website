import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDmNdzlPBQH-U04eEAEOMo3MuwbrDzXCRI",
  authDomain: "blog-website-496aa.firebaseapp.com",
  projectId: "blog-website-496aa",
  storageBucket: "blog-website-496aa.appspot.com",
  messagingSenderId: "720005673382",
  appId: "1:720005673382:web:8535ecdfb0c062b31b5f67"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();