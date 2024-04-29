import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCxS6kvTUh7RR6erhI_4x5y4wYe7DnQuws",
  authDomain: "my-login-39df0.firebaseapp.com",
  projectId: "my-login-39df0",
  storageBucket: "my-login-39df0.appspot.com",
  messagingSenderId: "922634140173",
  appId: "1:922634140173:web:d0b9fdfd757a37643e7344",
};

const app = initializeApp(firebaseConfig);

 export const auth = getAuth()
export const db = getFirestore(app);
