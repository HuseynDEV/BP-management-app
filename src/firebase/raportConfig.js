import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBKQIqBhy7Tlw4cOM_lHD-I_8o_cgc2UEc",
    authDomain: "manager-raport.firebaseapp.com",
    projectId: "manager-raport",
    storageBucket: "manager-raport.appspot.com",
    messagingSenderId: "427309867159",
    appId: "1:427309867159:web:ebbfb8e3e03060c64a49d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)


export { imgDB, txtDB }
