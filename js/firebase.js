// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC24yj86hosEjvUDJqOJgfL9uHFoCTXDH4",
  authDomain: "portfolio-d95f6.firebaseapp.com",
  projectId: "portfolio-d95f6",
  storageBucket: "portfolio-d95f6.firebasestorage.app",
  messagingSenderId: "225369934451",
  appId: "1:225369934451:web:48844517fffc2250183806",
  measurementId: "G-RJND5VVNFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);