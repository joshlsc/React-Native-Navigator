// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZOoFhqJs4AB_bfVFmsNe-J30pnaRfDUg",
  authDomain: "rntaskmanager-f7501.firebaseapp.com",
  projectId: "rntaskmanager-f7501",
  storageBucket: "rntaskmanager-f7501.firebasestorage.app",
  messagingSenderId: "811410941211",
  appId: "1:811410941211:web:a4b5143d985184650a9fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);