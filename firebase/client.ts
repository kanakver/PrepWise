// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBurXijB5wq1U1lIur5sHdiUMIFYJM3m2A",
  authDomain: "prepwise-123.firebaseapp.com",
  projectId: "prepwise-123",
  storageBucket: "prepwise-123.firebasestorage.app",
  messagingSenderId: "460126981176",
  appId: "1:460126981176:web:20b99dd6008e308ec6aacd",
  measurementId: "G-W1RZZC9J2Z"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);