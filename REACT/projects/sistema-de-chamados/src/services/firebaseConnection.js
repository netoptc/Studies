import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import 'firebase/auth'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBD7A_WPXgshu3xU3jd6WXdWKN-ax5jXLM",
  authDomain: "sistema-de-chamados-7e5c9.firebaseapp.com",
  projectId: "sistema-de-chamados-7e5c9",
  storageBucket: "sistema-de-chamados-7e5c9.appspot.com",
  messagingSenderId: "325129407503",
  appId: "1:325129407503:web:b768e094f817bd1ce9677a",
  measurementId: "G-0TR2PZEHCD"
});

const db = getFirestore(firebaseApp);

export default db;