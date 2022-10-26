import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBztwidV7x-1Cdns1XU9M1VBxxmoSa3g58",
    authDomain: "portfolio-b76cb.firebaseapp.com",
    projectId: "portfolio-b76cb",
    storageBucket: "portfolio-b76cb.appspot.com",
    messagingSenderId: "67084095057",
    appId: "1:67084095057:web:0ff61f1da691a5b5b9b270"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }