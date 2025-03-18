// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsNVmZf76FZ8kVVadlk_xOAF6Xj8HZs-M",
  authDomain: "client-site-restaurant.firebaseapp.com",
  projectId: "client-site-restaurant",
  storageBucket: "client-site-restaurant.firebasestorage.app",
  messagingSenderId: "943161786913",
  appId: "1:943161786913:web:976e26715fd3a8b9dd5960",
  measurementId: "G-ZNZVMEGS31"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);