// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyB2XkN25E_Snog_M8J2ME0uyunxl8qAN4Q",
  authDomain: "interviewprep-417f0.firebaseapp.com",
  projectId: "interviewprep-417f0",
  storageBucket: "interviewprep-417f0.firebasestorage.app",
  messagingSenderId: "910254550691",
  appId: "1:910254550691:web:6e45dc285c69cdb76a9916",
  measurementId: "G-LC74QPHRX9"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);