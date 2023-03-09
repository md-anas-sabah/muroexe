import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCemxdvuOpP1eqhwajm3U882gYTZceNix8",
  authDomain: "muroexe-f6de3.firebaseapp.com",
  projectId: "muroexe-f6de3",
  storageBucket: "muroexe-f6de3.appspot.com",
  messagingSenderId: "24150291342",
  appId: "1:24150291342:web:21de1fe070cb7fc4fa6adf",
  measurementId: "G-4SWEZC97M3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;  
