
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import { browser } from '$app/environment';
import { deleteObject, getStorage, ref, type FirebaseStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBqDoi2XbcUjQUXUHWOPVynhTArleiotM",
  authDomain: "layout-aleman.firebaseapp.com",
  databaseURL: "https://layout-aleman-default-rtdb.firebaseio.com",
  projectId: "layout-aleman",
  storageBucket: "layout-aleman.appspot.com",
  messagingSenderId: "882523951787",
  appId: "1:882523951787:web:40e550380e207aa93d1dee",
  measurementId: "G-V0H91FSDD0"
};
export let db: Firestore;
export let app: FirebaseApp;
export let auth: Auth;
export let storage: FirebaseStorage
// Initialize Firebase
export const initializeFirebase = () => {
  
  /*
    if (!browser) {
     throw new Error("Can't use the Firebase client on the server.");
    }
     */
    if (!app) {
     app = initializeApp(firebaseConfig);
     auth = getAuth(app);
     db = getFirestore(app);
     storage = getStorage(app)
    }
};

export async function eliminarActual(name){

  let refStorage = ref(storage, name);
  await deleteObject(refStorage).then(() => {
          
  }).catch((error) => {
      console.log(error)
  });
}

