// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDmjQl8bbSz5VtWSogUmv968ReqffqSsao",
  authDomain: "tiktok---jornada-d4d48.firebaseapp.com",
  projectId: "tiktok---jornada-d4d48",
  storageBucket: "tiktok---jornada-d4d48.appspot.com",
  messagingSenderId: "498468807279",
  appId: "1:498468807279:web:179e3ad684a0616642239a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;