import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAh39D8UElvlCVyd8LEA1Yh1S4poLZQKHM",
  authDomain: "expensify-react-app-ead27.firebaseapp.com",
  databaseURL: "https://expensify-react-app-ead27-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-react-app-ead27",
  storageBucket: "expensify-react-app-ead27.appspot.com",
  messagingSenderId: "868919383665",
  appId: "1:868919383665:web:cf13fba861f473a3ededd0"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(); 
const googleProvider = new GoogleAuthProvider();
const googleAuth = getAuth(firebaseApp);

export { db, googleProvider, googleAuth };
