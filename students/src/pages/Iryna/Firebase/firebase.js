// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrPaSZhekUPAUkuHN7osxh2OyBySgZtgk",
  authDomain: "students-64f61.firebaseapp.com",
  projectId: "students-64f61",
  storageBucket: "students-64f61.appspot.com",
  messagingSenderId: "458970967902",
  appId: "1:458970967902:web:aea7f349c3ddf93075a9cf"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default getFirestore();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export default getFirestore();