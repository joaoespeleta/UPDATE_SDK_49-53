import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyCR8UQHhj5Ur_-WqU4UXFQoWdJwNiXU8qQ",
  authDomain: "fir-chat-2329e.firebaseapp.com",
  projectId: "fir-chat-2329e",
  storageBucket: "fir-chat-2329e.firebasestorage.app",
  messagingSenderId: "869795229388",
  appId: "1:869795229388:web:db089ba1ee699fd0ca9c69",
  measurementId: "G-H4XNVZT4YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
