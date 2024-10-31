// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByU39_me3yRK5GotiwxVvxVSBfnx3ybic",
  authDomain: "business-listing-app-6ea99.firebaseapp.com",
  projectId: "business-listing-app-6ea99",
  storageBucket: "business-listing-app-6ea99.appspot.com",
  messagingSenderId: "212546023846",
  appId: "1:212546023846:web:1f403fb8e2037394261f67",
  measurementId: "G-DM2ZT7ESRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);