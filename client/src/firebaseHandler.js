import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth  } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC1mR97sYoxsJO7V1WNA9iIm4i2C-rb3yg",
  authDomain: "socialmedia-22c17.firebaseapp.com",
  projectId: "socialmedia-22c17",
  storageBucket: "socialmedia-22c17.appspot.com",
  messagingSenderId: "465114603641",
  appId: "1:465114603641:web:e8d4d94219cd72410e34a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

export {auth, db}