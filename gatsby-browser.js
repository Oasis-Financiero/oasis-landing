import "./src/css/style.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDk5dSFrIyz33-pEsVsJOaZL5VJAXxdsH4",
    authDomain: "oasis-financiero.firebaseapp.com",
    projectId: "oasis-financiero",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }