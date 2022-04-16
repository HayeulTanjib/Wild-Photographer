import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzZoWrJ-34nxq2dNVSC33f1lowS7qQxEY",
  authDomain: "johan-wild-tales.firebaseapp.com",
  projectId: "johan-wild-tales",
  storageBucket: "johan-wild-tales.appspot.com",
  messagingSenderId: "1006471219360",
  appId: "1:1006471219360:web:60984332b92be59678a1c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;