import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR4B-P2SiGMA1Qepd8hy-leOWn6t3CX70",
  authDomain: "wp-clone-cb9e3.firebaseapp.com",
  projectId: "wp-clone-cb9e3",
  storageBucket: "wp-clone-cb9e3.appspot.com",
  messagingSenderId: "115302098191",
  appId: "1:115302098191:web:51e3552376f1c0ca0cca7a",
};

export const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
export let storage = getStorage(app);
export let db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
