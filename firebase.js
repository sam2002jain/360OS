// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  getDocs,
  arrayUnion,
} from 'firebase/firestore';
import { getAuth, updatePassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqlXF-krPasG_c9mF51_2yHrBWaKdKJc4",
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

// Initialize Firestore
const db = getFirestore(app);

// Helper functions for Firestore operations
export const createDocument = async (collectionName, documentId, data) => {
  try {
    await setDoc(doc(db, collectionName, documentId), {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error creating document:', error);
    return false;
  }
};

export const updateDocument = async (collectionName, documentId, data) => {
  try {
    // 1. Add validation checks for the required arguments
    if (!collectionName || typeof collectionName !== 'string') {
      console.error('Error: "collectionName" must be a non-empty string.');
      return false;
    }

    if (!documentId || typeof documentId !== 'string') {
      console.error('Error: "documentId" must be a non-empty string.');
      return false;
    }
    
    // 2. Ensure the data object is valid
    if (!data || typeof data !== 'object') {
      console.error('Error: "data" must be a valid object.');
      return false;
    }

    // Now, with validated arguments, proceed with the update
    const docRef = doc(db, collectionName, documentId);

    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString()
    });
    
    console.log('Document successfully updated!');
    return true;

  } catch (error) {
    console.error('Error updating document:', error);
    return false;
  }
};

export const addPostToArray = async (collectionName, documentId, newPost) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, { posts: [newPost] });
      console.log("Document created and first post added.");
    } else {
      await updateDoc(docRef, {
        posts: arrayUnion(newPost)
      });
      console.log("Post successfully added to array.");
    }
    return true;
  } catch (error) {
    console.error('Error adding post to array:', error);
    return false;
  }
};

export const getDocument = async (collectionName, documentId) => {
  try {
    const docSnap = await getDoc(doc(db, collectionName, documentId));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error('Error getting document:', error);
    return null;
  }
};

export const deleteDocument = async (collectionName, documentId) => {
  try {
    await deleteDoc(doc(db, collectionName, documentId));
    return true;
  } catch (error) {
    console.error('Error deleting document:', error);
    return false;
  }
};

export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const allDocs = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for a document snapshot
      allDocs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return allDocs;
  } catch (error) {
    console.error('Error getting all documents:', error);
    return [];
  }
};

export const queryDocuments = async (collectionName, fieldPath, operator, value) => {
  try {
    const q = query(collection(db, collectionName), where(fieldPath, operator, value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error querying documents:', error);
    return [];
  }
};

export const passwordupdate = async(email, password)=>{
  try{
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      updatePassword(user, password)
      .then(()=>{
        console.log('Password updated successfully');
      })
      .catch((error)=>{
        console.log("error while updating password:",error);

      });
    }else{
      console.warn('No user is currently signed in.');
    }
  }
  catch(e){
    console.error('Error password change:', error);
    return;

  }
}

export { app, auth, db };
