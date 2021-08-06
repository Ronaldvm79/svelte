import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCy7Y5DeDhbdJhcyVEvOKkpIhGihIvgLow",
    authDomain: "todo-app-aaea5.firebaseapp.com",
    projectId: "todo-app-aaea5",
    storageBucket: "todo-app-aaea5.appspot.com",
    messagingSenderId: "39456061362",
    appId: "1:39456061362:web:733e9fbb9aeb539394d6ab"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();