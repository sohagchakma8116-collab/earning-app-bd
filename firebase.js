// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPJi4pbdK7npknjA0zcQBrbcFotZNEFDc",
  authDomain: "earning-app-bd-a6d83.firebaseapp.com",
  projectId: "earning-app-bd-a6d83",
  storageBucket: "earning-app-bd-a6d83.firebasestorage.app",
  messagingSenderId: "214665552790",
  appId: "1:214665552790:web:9e6e2eaba2ed642f3cb3b7",
  measurementId: "G-BEWTWS2S91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
