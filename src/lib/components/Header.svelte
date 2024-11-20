<script>
  import {generales} from '$lib/stores'
  import { page } from '$app/stores';  
  import { fly} from 'svelte/transition';
  let scout = false
  let layout = false
  let render = false
  let showMenu = false
</script>


<nav class="navbar navbar-expand-lg " data-aos="fade-down" >
  <div class="container-fluid menu justify-content-end">
    <a class="navbar-brand" href="/"><img class="menu-logo" src="{$generales?.logos.logo_negro}" alt="" width="90"></a>
    <button class="navbar-toggler" type="button" on:click={()=>showMenu=true}>
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse navbar-big justify-content-sm-center " id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item " data-aos="fade-up" data-aos-delay="100">
          <a class="nav-link {$page.url.pathname=='/'?'active':''}" aria-current="page" href="/#inicio">Inicio</a>
        </li>
        <li class="nav-item " data-aos="fade-up" data-aos-delay="200">
          <a class="nav-link" href="/#quienesSomos">¿Quiénes Somos?</a>
        </li>
        <li class="nav-item dropdown" data-aos="fade-up" data-aos-delay="300">
          <a class="nav-link dropdown-toggle {$page.url.pathname.includes('/servicios')?'active':''}" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul class="dropdown-menu">
            <li><a on:mouseenter={()=>scout=true}  on:mouseleave={()=>scout=false} class="dropdown-item" href="/servicios">Scouting {#if scout}<i class="bi bi-caret-left-fill"></i>{/if}</a> </li>
            <li><a on:mouseenter={()=>layout=true}  on:mouseleave={()=>layout=false} class="dropdown-item" href="/servicios#layout">Layout {#if layout}<i class="bi bi-caret-left-fill"></i>{/if}</a></li>
            <li><a on:mouseenter={()=>render=true}  on:mouseleave={()=>render=false} class="dropdown-item" href="/servicios#render">Renders {#if render}<i class="bi bi-caret-left-fill"></i>{/if}</a></li>
          </ul>
        </li>
       
        <li class="nav-item" data-aos="fade-up" data-aos-delay="400">
          <a class="nav-link {$page.url.pathname.includes('/proyectos')?'active':''}" href="/proyectos">Proyectos</a>
        </li>
        <!--
        <li class="nav-item">
          <a class="nav-link" href="#">Scouting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Layouts</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Renders
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Vistas</a></li>
            <li><a class="dropdown-item" href="#">360</a></li>
          </ul>
        </li>
        -->
        <li class="nav-item" data-aos="fade-up" data-aos-delay="500">
          <a class="nav-link {$page.url.pathname=='/contacto'?'active':''}" href="/contacto">Contáctanos</a>
        </li>
        
      </ul>
     
    </div>
  
  </div>
  
  
</nav>


{#if showMenu}
<nav class="navbar navbar-expand-lg bg-white menu-movil" transition:fly >
  <button data-aos="zoom-out" data-aos-delay="200" class="navbar-toggler menu-movil_close" type="button" on:click={()=>showMenu=false}>
    <i class="bi bi-x-lg"></i>
  </button>

  <ul class="menu-movil-center">
    <li class="nav-item " data-aos="fade-right" data-aos-delay="300">
      <a on:click={()=>showMenu=false} class="nav-link {$page.url.pathname=='/'?'active':''}" aria-current="page" href="/#inicio">Inicio</a>
    </li>
    <li class="nav-item " data-aos="fade-right" data-aos-delay="400">
      <a on:click={()=>showMenu=false} class="nav-link" href="/#quienesSomos">¿Quiénes Somos?</a>
    </li>
    <li class="nav-link link-dark" data-aos="fade-right" data-aos-delay="500">
      <a class="align-items-center dropdown-toggle {$page.url.pathname.includes('/servicios')?'active':''}" data-bs-toggle="collapse" href="#home-collapse2" aria-expanded="true">
           Servicios
      </a>
      <div data-aos="fade-right" data-aos-delay="600" class="collapse submenus mt-2" id="home-collapse2" style="">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a on:click={()=>showMenu=false} class="dropdown-item" href="/servicios">Scouting </a> </li>
          <li><a on:click={()=>showMenu=false} class="dropdown-item" href="/servicios#layout">Layout </a></li>
          <li><a on:click={()=>showMenu=false} class="dropdown-item" href="/servicios#render">Renders </a></li>
       
        </ul>
      </div>
    </li>
    <li class="nav-item" data-aos="fade-right" data-aos-delay="700">
      <a on:click={()=>showMenu=false} class="nav-link {$page.url.pathname.includes('/proyectos')?'active':''}" href="/proyectos">Proyectos</a>
    </li>
    <li class="nav-item" data-aos="fade-right" data-aos-delay="800">
      <a on:click={()=>showMenu=false} class="nav-link {$page.url.pathname=='/contacto'?'active':''}" href="/contacto">Contáctanos</a>
    </li>
  </ul>  
</nav>
{/if}


<style>
  .navbar{background-color: white;}
.menu{    min-height: 65px;}
  .menu-logo{ max-width: 200px;max-height: 80px;}
  .navbar-brand{position: absolute;    left: 25px; cursor: pointer;}
  .nav-item{margin: 0 10px; letter-spacing: 2px;}
 
  .nav-item:hover .nav-link{color:rgba(0, 0, 0, 0.584)}
  .menu-movil{width: 100%; position: fixed; z-index: 100;height: 100vh;top: 0;}
  .menu-movil-center{padding-left: 0; width: 100%;height: 100%; display: flex; flex-direction: column; justify-content: center;align-items: center;list-style: none;}
  .menu-movil-center a{font-size: 30px;margin: 10px 0; color: rgb(42 42 42 / 73%);font-weight: 200;}
  .menu-movil_close{border: none; font-size: 30px; position: absolute; right: 10px; top: 10px;}
  .menu-movil-center .active{color: black;}
  .nav-link,.nav-item{cursor: pointer;}
  @media only screen and (max-width: 600px) {
   .navbar-big{display: none;}
    .menu{flex-direction: row;}
    .separation_line {width: 100%;}
    .menu-logo{ width: 80px;height: auto;}
    .separation_line{margin: 5px 0;}
    .navbar{padding: 0;}
  }
    
</style>
