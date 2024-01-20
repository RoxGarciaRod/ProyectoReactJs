import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNZZLX7HRGWMZENh-kbvJTQa_A64hsaXQ",
  authDomain: "explicitus-1faf8.firebaseapp.com",
  projectId: "explicitus-1faf8",
  storageBucket: "explicitus-1faf8.appspot.com",
  messagingSenderId: "211804679200",
  appId: "1:211804679200:web:cbb8601113a886bc532045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore ( app )
