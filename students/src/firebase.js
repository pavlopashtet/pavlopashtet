// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZW9kt2i2-yzojC-6bBbGG3RrVrQmnTVU",
    authDomain: "students-27ed2.firebaseapp.com",
    projectId: "students-27ed2",
    storageBucket: "students-27ed2.appspot.com",
    messagingSenderId: "227122886709",
    appId: "1:227122886709:web:bf080c062d27365f7bd97c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export default getFirestore();