// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.api_key,
  authDomain: "os-50893.firebaseapp.com",
  projectId: "os-50893",
  storageBucket: "os-50893.firebasestorage.app",
  messagingSenderId: "1079339253291",
  appId: "1:1079339253291:web:4cd6940ef84296d07b346e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with a safe fallback for React Native
let auth;
try {
  // Use require to avoid bundling errors if AsyncStorage is not installed yet
  const { initializeAuth, getReactNativePersistence, getAuth } = require("firebase/auth");
  try {
    const AsyncStorage = require("@react-native-async-storage/async-storage").default;
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (err) {
    // Fallback to default in-memory persistence
    auth = getAuth(app);
  }
} catch (e) {
  // Final fallback in case imports fail at build time
  const { getAuth } = require("firebase/auth");
  auth = getAuth(app);
}

export { app, auth };
