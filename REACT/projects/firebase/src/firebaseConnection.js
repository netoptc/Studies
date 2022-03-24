import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBUHwJNZliaQPrc0rclbpvvKgF2MlfIopY",
    authDomain: "curso-c0cbd.firebaseapp.com",
    projectId: "curso-c0cbd",
    storageBucket: "curso-c0cbd.appspot.com",
    messagingSenderId: "987938049419",
    appId: "1:987938049419:web:b46b61ec6c1477f37b338e",
    measurementId: "G-2XRW3ZNLH2"
});

const db = getFirestore(firebaseApp);

export default db;




