import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace the values below with the ones from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDqgEYbR536cvojb-YnISEqPXvifksIDQw",
  authDomain: "pdfwale-c8387.firebaseapp.com",
  projectId: "pdfwale-c8387",
  storageBucket: "pdfwale-c8387.firebasestorage.app",
  messagingSenderId: "356219010402",
  appId: "1:356219010402:web:f89624ac0f597782b4403b",
  measurementId: "G-GPCT62RFTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export these so we can use them in your Header/Navbar
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);