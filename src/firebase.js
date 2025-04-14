import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrt-5z8S9AcsvezLxlR1Fiiw8sSgT_iJU",
  authDomain: "agent-website-94cca.firebaseapp.com",
  projectId: "agent-website-94cca",
  storageBucket: "agent-website-94cca.firebasestorage.app",
  messagingSenderId: "468929725808",
  appId: "1:468929725808:web:2ee9af9bd5f4d1df353bb5",
  measurementId: "G-354GNDVV2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, analytics, db};