import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ANALYTICS
// import { getAnalytics } from 'firebase/analytics'


//PRUEBA CUENTA ASAEL

const firebaseConfig = {
    apiKey: "AIzaSyDk5dSFrIyz33-pEsVsJOaZL5VJAXxdsH4",
    authDomain: "oasis-financiero.firebaseapp.com",
    projectId: "oasis-financiero",
}


// PRODUCCION OASIS FINAN!!!!!

// const firebaseConfig = {
//     apiKey: "AIzaSyAE8Y7oSOTGOSzVByNt9WroQ432-H58fJo",
//     authDomain: "oasis-financiero-7a7e9.firebaseapp.com",
//     projectId: "oasis-financiero-7a7e9",
//     storageBucket: "oasis-financiero-7a7e9.appspot.com",
//     messagingSenderId: "662657643593",
//     appId: "1:662657643593:web:a075d1a33fd361a6c37b98",
//     measurementId: "G-YTXSXD213J"
//   };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// const analytics = getAnalytics(app);


export { db }
