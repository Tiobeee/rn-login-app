import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnvwBp3mOFtEWTr3YAEAeiBQhIIUhuQiw",
  authDomain: "applogin-bf7eb.firebaseapp.com",
  projectId: "applogin-bf7eb",
  storageBucket: "applogin-bf7eb.appspot.com",
  messagingSenderId: "40912500560",
  appId: "1:40912500560:web:fc32d5ac3cc134bb7f5e55",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
