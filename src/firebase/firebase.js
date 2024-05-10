// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.ENV.VITE_APIKEY, 
  authDomain: import.meta.ENV.VITE_AUTHDOMAIN,
  projectId: import.meta.ENV.VITE_PROJECTID, 
  storageBucket: import.meta.ENV.VITE_STORAGEBUCKET, 
  messagingSenderId: import.meta.ENV.VITE_MESSAGINGSENDERID, 
  appId: import.meta.ENV.VITE_APPID, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app