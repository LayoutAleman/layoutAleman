/** @type {import('./$types').LayoutLoad} */


import { initializeFirebase, auth } from '../lib/firebase.client';
import { browser } from '$app/environment';
import { onAuthStateChanged } from 'firebase/auth';

export async function load({ url }) {

    /*
  try {
   initializeFirebase();
  } catch (ex) {
   console.error(ex);
  }

 return {
  getAuthUser: getAuthUser,
  url: url.pathname
 };*/
}
/*
function getAuthUser() {
return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => resolve(user ? user : false));
    });
}*/