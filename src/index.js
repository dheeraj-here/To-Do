import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyaVwLV8m7JYgRfwAzeWSly4uix38PuyI",
  authDomain: "project-1-a3084.firebaseapp.com",
  projectId: "project-1-a3084",
  storageBucket: "project-1-a3084.appspot.com",
  messagingSenderId: "631023801904",
  appId: "1:631023801904:web:0e65a113f279edc97ffff5",
  measurementId: "G-74Z41ZCCS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


