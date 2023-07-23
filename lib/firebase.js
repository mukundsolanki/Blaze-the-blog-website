import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDOKsxPliDdOjF8Qzo4-_PmaSctWjS3T_M",
    authDomain: "blog-website-93345.firebaseapp.com",
    projectId: "blog-website-93345",
    storageBucket: "blog-website-93345.appspot.com",
    messagingSenderId: "43532456497",
    appId: "1:43532456497:web:39b08c00bb7944fd00bb10"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();