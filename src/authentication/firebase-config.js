import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDpfyv8BQ0fKjBqiqDCg1eiIDlg5T5mS8w",
    authDomain: "iosquiz-f0dbf.firebaseapp.com",
    databaseURL: "https://iosquiz-f0dbf-default-rtdb.firebaseio.com",
    projectId: "iosquiz-f0dbf",
    storageBucket: "iosquiz-f0dbf.appspot.com",
    messagingSenderId: "922504539238",
    appId: "1:922504539238:web:76232627a5006a4ec091a7",
    measurementId: "G-7XLW1E5G9V"
   
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);