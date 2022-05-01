// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBQnut8FOLqWvXZoFZYu_DCAfXoG3bqTXU",
//   authDomain: "workout-gears-assignment-11.firebaseapp.com",
//   projectId: "workout-gears-assignment-11",
//   storageBucket: "workout-gears-assignment-11.appspot.com",
//   messagingSenderId: "939081766551",
//   appId: "1:939081766551:web:dd4e0590bcf5b8eac9bbd2"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
console.log(auth);
export default auth;