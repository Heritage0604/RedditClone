// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6GP7jpO6tad5ceebl4EFHLCHuuGiHdlE",
  authDomain: "reddit-clone-tutorial-50c12.firebaseapp.com",
  projectId: "reddit-clone-tutorial-50c12",
  storageBucket: "reddit-clone-tutorial-50c12.appspot.com",
  messagingSenderId: "311012379586",
  appId: "1:311012379586:web:97cab7dba9e6f34666e45b",
  measurementId: "G-E9K8FNS6VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);