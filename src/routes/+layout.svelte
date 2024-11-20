<script>

    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import '@splidejs/svelte-splide/css';
    import AOS from 'aos';
    import '../../node_modules/aos/dist/aos.css'
    import '../../node_modules/lightgallery/css/lightgallery-bundle.css'
    import '../../node_modules/lightgallery/css/lightgallery.css' 
    import '../../node_modules/lightgallery/lightgallery.umd.js'
   
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { collection, getDocs } from "firebase/firestore"; 
    import {db} from '../lib/firebase.client'
    import {paginas,generales,proyectos} from '../lib/stores'
    import toast, {Toaster} from 'svelte-french-toast'
    import { Jellyfish } from 'svelte-loading-spinners';
    import firebase from "firebase/compat/app";
    import { onAuthStateChanged } from "firebase/auth";
    import { initializeFirebase, auth } from '../lib/firebase.client';

    let loading = false
    let projectImages = []
    onMount(()=>{

       

        firebaseStart()

        getCollections()

        AOS.init({duration: 1000});
    })

    function getAllImages(){
        projectImages = $paginas?.inicio?.carrusel
        projectImages = [...projectImages,$paginas?.contacto?.imagen_contacto]
        projectImages = [...projectImages,$paginas?.layout?.layout_img]
        projectImages = [...projectImages,$paginas?.pagina2?.layout_img]
        projectImages = [...projectImages,$paginas?.pagina2?.render_img]
        projectImages = [...projectImages,$paginas?.pagina2?.scouting_img]
        projectImages = [...projectImages,...$paginas?.renders?.carrusel]
        
        $proyectos.map(val=>{
            projectImages = [...projectImages,val.imagen_portada]
            projectImages = [...projectImages,...val.galeria]
        })
       
    }

    async function getProjects() {
      
      let x = []
      const querySnapshot = await getDocs(collection(db, "proyectos"))
      querySnapshot.forEach((doc) => {x = [...x,{...doc.data(),id:doc.id}];});
      x.sort((a, b) => {
          const aPos = a.pos !== undefined && a.pos !== null ? a.pos : Infinity;
          const bPos = b.pos !== undefined && b.pos !== null ? b.pos : Infinity;
          return aPos - bPos;
      });
      $proyectos = x


    }

    async function firebaseStart(){
        try {
            initializeFirebase();
        } catch (ex) {
        console.error(ex);
        }
/*
        return {
        getAuthUser: getAuthUser,
        url: url.pathname
        };
        */
    }

    function getAuthUser() {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => resolve(user ? user : false));
        });
    }

    async function getCollections(){
        loading = true
        const querySnapshot = await getDocs(collection(db, "paginas"))
        
        querySnapshot.forEach((doc) => {$paginas[doc.id] = doc.data();});

        const querySnapshot2 = await getDocs(collection(db, "generales"))
        querySnapshot2.forEach((doc) => {$generales[doc.id] = doc.data();});
        await getProjects()
        getAllImages()
        loading = false

    }


</script>
<svelte:head>
   <title>Layout Aleman</title>
   {#if !loading}
        {#each projectImages as img}
            <link rel="preload" href="{img}" as="image">
        {/each}
    {/if}
</svelte:head>
<body>
    {#if $paginas?.inicio && $generales.contacto && !loading}
        {#if !$page?.route.id?.includes('/admin')}
        <Header/>
        {/if}

       
            <slot/>
    
        {#if !$page?.route.id?.includes('/admin')}
        <Footer/>
        {/if}
    {:else} 
    <div class="full-page">
      
        <img class="menu-logo parpadea" src="../assets/images/Logo_negro.png" alt="" width="150">
        <!--<Jellyfish size="100" color="black" unit="px" duration="1s" />  -->
        
    </div>
         
    {/if}
    <Toaster />
</body>



<style>

    body{
        font-family: "Raleway", sans-serif; background-color: white; 
    }/*f9f9f9*/
    .full-page{display: flex;align-items: center;justify-content: center;width: 100%;height: 90vh;}
   
   
</style>
