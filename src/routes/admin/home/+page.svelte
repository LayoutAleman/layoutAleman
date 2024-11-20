<script>
    import { goto } from '$app/navigation';
    import PaginaContacto from '$lib/components/admin/PaginaContacto.svelte';
    import PaginaEjemplo from '$lib/components/admin/PaginaEjemplo.svelte';
    import PaginaGeneral from '$lib/components/admin/PaginaGeneral.svelte';
    import PaginaInicio from '$lib/components/admin/PaginaInicio.svelte';
    import PaginaProyectos from '$lib/components/admin/PaginaProyectos.svelte';
    import { onMount } from 'svelte';
    import {generales} from '../../../lib/stores'
    import { getAuth, signOut } from "firebase/auth";
    import PaginaScouting from '$lib/components/admin/PaginaScouting.svelte';
    import PaginaLayout from '$lib/components/admin/PaginaLayout.svelte';
    import PaginaRenders from '$lib/components/admin/PaginaRenders.svelte';

    let opcion = ''
   
    onMount(()=>{
      getAuth().onAuthStateChanged(function(user) {
        
        if (!user) {
          goto('/admin')
        }
      });
    })

    
    const auth = getAuth();

    function logout(){
      signOut(auth).then(() => {
          goto('/admin')
      }).catch((error) => {
        // An error happened.
      });
    }
   
</script>

    <div class="row mx-0">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light col-2 side-menu" >
            <a href="/" target="_blank" class="text-center mb-3 mb-md-0  link-dark text-decoration-none">
              <img width="50" src="{$generales.logos.logo_negro}" alt="">
              <br>
              <span class="fs-4">Layout Aleman</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item  {opcion==''?'active':''}">
                <a href="#" on:click={()=>opcion=''} class="nav-link link-dark d-flex align-items-center" aria-current="page">
                    <i class="bi bi-house"></i>
                  General
                </a>
              </li>
              <li class="nav-link link-dark">
                <a class="align-items-center dropdown-toggle" data-bs-toggle="collapse" href="#home-collapse" aria-expanded="true">
                    <i class="bi bi-file-earmark"></i>  Paginas
                </a>
                <div class="collapse submenus mt-2" id="home-collapse" style="">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li class="{opcion=='inicio'?'active':''}"><a href="#" on:click={()=>opcion='inicio'} class="link-dark ">Inicio</a></li>
                    <li><a href="#" class="link-dark {opcion=='ejemplo'?'active':''}" on:click={()=>opcion='ejemplo'}>Servicios</a></li>
                    <li><a href="#" class="link-dark {opcion=='contactopag'?'active':''}" on:click={()=>opcion='contactopag'}>Contacto</a></li>
                  </ul>
                </div>
              </li>
              <li class="nav-link link-dark">
                <a class="align-items-center dropdown-toggle" data-bs-toggle="collapse" href="#home-collapse2" aria-expanded="true">
                    <i class="bi bi-motherboard"></i>  Servicios
                </a>
                <div class="collapse submenus mt-2" id="home-collapse2" style="">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li class="{opcion=='scouting'?'active':''}"><a href="#" on:click={()=>opcion='scouting'} class="link-dark ">Scouting</a></li>
                    <li><a href="#" class="link-dark {opcion=='layout'?'active':''}" on:click={()=>opcion='layout'}>Layout</a></li>
                    <li><a href="#" class="link-dark {opcion=='renders'?'active':''}" on:click={()=>opcion='renders'}>Render y 360</a></li>
                  </ul>
                </div>
              </li>
              <li class="nav-item {opcion=='proyectos'?'active':''}">
                <a href="#" class="nav-link link-dark d-flex align-items-center" aria-current="page" on:click={()=>opcion='proyectos'}>
                    <i class="bi bi-images"></i>
                  Proyectos
                </a>
              </li>
             
            </ul>

            
            <hr>
            <div class="dropdown">
              <a href="#" on:click={logout} class="d-flex align-items-center link-dark text-decoration-none " id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>sign out</strong>
              </a>
             
            </div>
        </div>
        <div class="col-2"></div>

        <div class="col-10 bg-white">
            {#if opcion=='inicio'}
                <PaginaInicio/>
            {:else if opcion=='contactopag'}    
                <PaginaContacto/>  
            {:else if opcion=='ejemplo'}   
                <PaginaEjemplo/>
            {:else if opcion=='proyectos'}   
                <PaginaProyectos/>
            {:else if opcion=='scouting'}   
                <PaginaScouting/>
            {:else if opcion=='layout'}   
                <PaginaLayout/>
            {:else if opcion=='renders'}   
                <PaginaRenders/>
            {:else if opcion==''}     
                <PaginaGeneral/>
            {/if}
        </div>
    </div>

    <style>
        .side-menu{height: 100vh; position: fixed;}
        .side-menu i{font-size: 21px;margin-right: 7px; color: rgba(0, 0, 0, 0.572);}
        .submenus li{font-size: 16px;padding-left: 23%;margin-bottom: 7px;}
        .side-menu .active{font-weight: 600;}
    </style>

