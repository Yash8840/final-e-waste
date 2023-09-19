// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBo5CmFLgzt3yS493ZUVA1d-3k9g3lljvg",
  authDomain: "e-waste-90cc6.firebaseapp.com",
  projectId: "e-waste-90cc6",
  storageBucket: "e-waste-90cc6.appspot.com",
  messagingSenderId: "429583648725",
  appId: "1:429583648725:web:a1549745f3d81b1fecdf5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();