
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
let app
export async function load({ params }) {

    const docRef = doc(getFirestore(startDb()), "proyectos", params.slug);
    const docSnap = await getDoc(docRef).catch((error)=>{throw redirect(303,'/proyectos')})
    ;

    if (docSnap.exists()) {
        
    } else {
        throw redirect(303,'/proyectos')
    }
    let galeria = []
    if(docSnap.data().galeria)galeria = docSnap.data().galeria

	return {proyecto:docSnap.data(),galeria:galeria}

	
}

 function startDb(){
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
    app = initializeApp(firebaseConfig);
    return app
}