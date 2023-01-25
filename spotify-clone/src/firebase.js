import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAE8DPMHW9tgyafC1B5-sWCFGk9_eiuZzE",
  authDomain: "spotify-ed7f9.firebaseapp.com",
  projectId: "spotify-ed7f9",
  storageBucket: "spotify-ed7f9.appspot.com",
  messagingSenderId: "511137852838",
  appId: "1:511137852838:web:f45185a6c18dcdbbb4f367",
  measurementId: "G-GD167RP2YN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);