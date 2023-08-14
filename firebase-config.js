import { initializeApp } from "firebase/app";

let appConfig;

if (process.env.GATSBY_FIREBASE_CONFIG) {
  appConfig = JSON.parse(process.env.GATSBY_FIREBASE_CONFIG);
}

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = initializeApp(appConfig);
    return instance;
  }

  return null;
}