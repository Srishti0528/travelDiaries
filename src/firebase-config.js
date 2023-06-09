import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2N6yqEtURGwi7mCC2otC7UfrNTxpX9dY",
  authDomain: "blogapp-22c9d.firebaseapp.com",
  projectId: "blogapp-22c9d",
  storageBucket: "blogapp-22c9d.appspot.com",
  messagingSenderId: "720366436567",
  appId: "1:720366436567:web:6674442f5a5bb36cf63092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
