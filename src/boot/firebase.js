// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-usG6iwBFjqLacMcWMkBrQrrJsEUsYvI",
  authDomain: "edufoodhack-611da.firebaseapp.com",
  projectId: "edufoodhack-611da",
  storageBucket: "edufoodhack-611da.appspot.com",
  messagingSenderId: "931435041737",
  appId: "1:931435041737:web:c8afa97db7c6a44a9bce18",
  measurementId: "G-MNC7ZLDLCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics}
