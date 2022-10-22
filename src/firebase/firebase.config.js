// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSRAapukYqfeNvhutORt7ksDzvSIQq9aI",
  authDomain: "dragon-news-client-3522e.firebaseapp.com",
  projectId: "dragon-news-client-3522e",
  storageBucket: "dragon-news-client-3522e.appspot.com",
  messagingSenderId: "828425236358",
  appId: "1:828425236358:web:e46a8c97c5f79144540607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;