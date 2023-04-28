import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCLWOMXv_-SLNru5cALH_SnsxDZaA_QSHA",
  authDomain: "todo-app-3dbf0.firebaseapp.com",
  projectId: "todo-app-3dbf0",
  storageBucket: "todo-app-3dbf0.appspot.com",
  messagingSenderId: "587010976837",
  appId: "1:587010976837:web:c187794b417d0547fe872c"
};

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDb = getFirestore(FirebaseApp)