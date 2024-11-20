<script>
    
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import {paginas,cargado,generales} from '../lib/stores'
    import { onMount } from 'svelte';
    import { fly} from 'svelte/transition';
    $: frase=$paginas.inicio.frase
    $: titulo_2 = $paginas.inicio.titulo_acerca_de
    $: parrafo_2 = $paginas.inicio.parrafo_acerca_de          
    $: carousel_images = $paginas.inicio.carrusel?$paginas.inicio.carrusel:[]
    $: video = $paginas.inicio.video_inicio?$paginas.inicio.video_inicio:'https://apivideo-demo.s3.amazonaws.com/hello.mp4'
    let titulo_carrusel = $paginas.inicio?.titulo_carrusel
    let verMas = false
    let pageCharging = false
    onMount(()=>{
        
        if(!$cargado.inicio){
            pageCharging = true
            preloadImages(carousel_images)
            setTimeout(()=>{
                pageCharging = false
                $cargado.inicio = true
            },2000)
        }
    
    })

    function preloadImages(urls){
        var loadedCounter = 0;
        var toBeLoadedNumber = urls.length;
     
        urls.forEach(function(url){
        preloadImage(url.imagen_portada, function(){
            loadedCounter++;
       
        });
    });
    function preloadImage(url, anImageLoadedCallback){
        var img = new Image();
        img.onload = anImageLoadedCallback;
        img.src = url;
    }}
</script>
<svelte:head>
    {#each carousel_images as img}
        <link rel="preload" href="{img}" as="image">
    {/each}
    
</svelte:head>
{#if pageCharging}
<div class="full-page-charge"  transition:fly>
    <img class="menu-logo parpadea" src="{$generales?.logos?.logo_negro}" alt="" width="150">
</div>
{/if}

<div data-aos="fade-in" data-aos-duration="1500" class="row justify-content-center mx-0 mb-sm-5 pb-sm-5" id="inicio">
   
    <div class="col-12 p-0">
        <!--autoplay:true,interval:3000-->
        <Splide  class="carrouser-home splide box-shadow" options="{{preloadPages: carousel_images.length,type  : 'fade',rewind: true,autoplay:true,interval:3000,pauseOnHover:false}}" aria-label="My Favorite Images">
            {#each carousel_images as image }
            <SplideSlide class="carrouser-home_slide">
                <!--
                <div class="carrusel-logo">
               
                    <img class="carrusel-logo_img" src="{$generales.logos.logo_blanco}" alt="">
                    <p class="text-center carrusel-logo-title">{titulo_carrusel}</p>
                </div>
                -->
                <img src='{image}' alt="Image 1" class="carrouser-home_img"/>
              </SplideSlide>
            {/each}
            
        </Splide>
       
    </div>
   
    <div  class="col-12 quote-container pt-5" >
        <div class="row mx-0 pt-sm-5 my-5 justify-content-center pos-rel">
            <div data-aos="fade-up"   class="marca-de-agua marca-de-agua-izq">
                <img src="../assets/images/MARCA-L.png" alt="">
            </div>
            <div data-aos="zoom-in"  data-aos-duration="1200" class="col-sm-8 col-12 text-center paragraph-separation mt-5">
                <div class="quote d-flex">
                    <i class="bi bi-quote"></i>
                    <h2 >{frase?frase:''}</h2>
                    <i class="bi bi-quote quote-close"></i>
                </div>
            </div>
            <div data-aos="fade-down"  data-aos-duration="1500" data-aos-delay="300" class="marca-de-agua marca-de-agua-der">
                <img src="../assets/images/MARCA-A.png" alt="">
            </div>
        </div>
    </div> 
   
</div>

<div class="row mx-0 align-items-center" id="quienesSomos">
    <div class="col-sm-6 col-12 pl-0 ">
        
    <!--autoplay-->
    <video id="video_inicio" autoplay playsinline loop muted data-aos="fade-right">
        <source src="{video}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="col-sm-6 col-12" data-aos="zoom-in">
        <div class="title title3 title-right my-5" >
            <h2>{titulo_2}</h2><hr>
        </div>
        <p class="paragraph-separation make-mayus paragraph-acercade "> {#if !verMas}{@html parrafo_2}{:else}{@html parrafo_2.slice(0,400)}...{/if}
            <!--<button on:click={()=>verMas=!verMas} class="link-adcent">{#if verMas}Ocultar...{:else}ver mas{/if}</button>-->
            <br><b class="text-right color-adcent"><br>LOCALIZADOS EN AGUASCALIENTES, MÉXICO.</b>
        </p>
       
    </div>
    
</div>
<style>
    .about-us_img{max-width: 200px;}
    .carrusel-logo{position: absolute;height: auto; background-color: rgba(0, 0, 0, 0.29);;
    width: 30%;
    z-index: 1;
    padding: 30px 10px; display: flex; flex-direction: column; align-items: center;
}
    .carrusel-logo_img{width: 60%;    position: relative;
    z-index: 10;
}
.carrusel-logo-title{    padding: 10px 0;
    color: #ffffffc7;
    z-index: 10;
    position: relative;
    letter-spacing: 3px;
    margin-bottom: 0;}
.paragraph-acercade{
    margin-left: 10%;  text-align: justify; padding-right: 5%;
    font-weight: 350;
    font-size: 15px;
}
.title3 h2{font-weight: 600 ;}
.quote{letter-spacing: 2px; text-align: center; font-size: 27px !important; justify-content: center;}
#quienesSomos{margin: 0em 0 4em 0;}    
#quienesSomos video{width: 100%;height: auto; margin-top: 6em;}
.marca-de-agua{position: absolute;top: 30%; width: auto;}
.marca-de-agua img{    width: 150px;opacity: 8%;}
.marca-de-agua-der img{width: 190px;}
.marca-de-agua-der{right: 2.5%;}
.marca-de-agua-izq{left: 2.5%;}
.linea-quote{opacity: 20%;}
.quote-container{margin: 2em 0 2em 0}
@media only screen and (max-width: 600px) {
    .carrusel-logo{width: 60%;}
    .marca-de-agua img{width: 100px}
    .marca-de-agua-der img{width: 125px}
    .marca-de-agua-der{    left: 16%;top: -52%;}
    #quienesSomos{margin: 2em 0 2em 0;}   
    .marca-de-agua-izq{    top: -36%;}
    #quienesSomos video{margin-top: 0em;}
    .quote-container{margin-top: 8em;}
    .paragraph-acercade{    margin-left: 5%;text-align: center;}
    .quote{ margin-top: 10px;}
    .quote h2{font-size: 20px !important;}
}
</style>


