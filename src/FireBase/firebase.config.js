// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9qlxakMCcGs245kSvLOMjByOKM5l-o8",
  authDomain: "toy-s-market-place.firebaseapp.com",
  projectId: "toy-s-market-place",
  storageBucket: "toy-s-market-place.appspot.com",
  messagingSenderId: "622396207045",
  appId: "1:622396207045:web:ebea80a2b30d8c59e0a5ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;