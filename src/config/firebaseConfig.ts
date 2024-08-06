// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVTg-XAWa008qbKCmTfxk38h8Szj2ZzpM",
  authDomain: "avocano-1dcee.firebaseapp.com",
  projectId: "avocano-1dcee",
  storageBucket: "avocano-1dcee.appspot.com",
  messagingSenderId: "175616470962",
  appId: "1:175616470962:web:3548c026075e51dac4feab",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
