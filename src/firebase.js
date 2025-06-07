// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJ6QWKVH1kc4gypUN0UjeDprKDqnMVfwM",
  authDomain: "dockcv-builder.firebaseapp.com",
  projectId: "dockcv-builder",
  storageBucket: "dockcv-builder.appspot.com", // FIXED: ".app" ➝ ".appspot.com"
  messagingSenderId: "763381698631",
  appId: "1:763381698631:web:97df538d2affdd65162162",
  measurementId: "G-XSJ8761SWC"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
