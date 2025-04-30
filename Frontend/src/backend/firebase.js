// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAA9cJgyPNqGZ-2g-sSQ_tf_ZIB41NA70s",
    authDomain: "pulmocare-1f315.firebaseapp.com",
    projectId: "pulmocare-1f315",
    storageBucket: "pulmocare-1f315.firebasestorage.app",
    messagingSenderId: "64451876635",
    appId: "1:64451876635:web:059c9d839069e08074e5be",
    measurementId: "G-VGGX0ZLQDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;