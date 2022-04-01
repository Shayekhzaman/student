import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCOf1H0Kd0fCAP7S8QFQ02vW36cgXHxyOU",
    authDomain: "student-suporter.firebaseapp.com",
    projectId: "student-suporter",
    storageBucket: "student-suporter.appspot.com",
    messagingSenderId: "246617490968",
    appId: "1:246617490968:web:3f3417e739ca6ef048656d"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);