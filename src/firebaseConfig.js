// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmQDdGSFJ761OGGMPenRnGBcpWACxVF4s",
  authDomain: "mch-school-b6633.firebaseapp.com",
  projectId: "mch-school-b6633",
  storageBucket: "mch-school-b6633.appspot.com",
  messagingSenderId: "279357935285",
  appId: "1:279357935285:web:7281fc522ba03a905a38fc",
  measurementId: "G-1ZV8P97W4D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);