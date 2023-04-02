import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIQot6n0ekyA426eV7OHdAt_wAzV-pVaE",
  authDomain: "learn-firebase-9395c.firebaseapp.com",
  projectId: "learn-firebase-9395c",
  storageBucket: "learn-firebase-9395c.appspot.com",
  messagingSenderId: "179396143235",
  appId: "1:179396143235:web:084e4b5732228167aa53b6",
  measurementId: "G-60JZLNJHFD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
