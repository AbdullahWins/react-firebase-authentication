import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkXWYa-42D0G0S6hlhiy8r1CbE0VwFaXY",
  authDomain: "react-firebase-auth-bcc36.firebaseapp.com",
  projectId: "react-firebase-auth-bcc36",
  storageBucket: "react-firebase-auth-bcc36.appspot.com",
  messagingSenderId: "1030775163731",
  appId: "1:1030775163731:web:b6f42a496486ff1a43efa6",
  measurementId: "G-K7KGBTDTV2",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;