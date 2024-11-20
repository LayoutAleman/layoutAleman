<script>
    import lightGallery from 'lightgallery';
    // Plugins
    import lgThumbnail from 'lightgallery/plugins/thumbnail'
    import lgZoom from 'lightgallery/plugins/zoom'
    import { onMount } from 'svelte';
    import lgShare from "lightgallery/plugins/share";
    import lgHash from "lightgallery/plugins/hash";
   

    export let data
    let proyecto = data.proyecto

    $: galeria = data.galeria
    let charged = false
    let auxGaleria = []

    onMount(()=>{
        proyectoImgDelay()
        lightGallery(document.getElementById('lightgallery'), {
            plugins: [lgZoom, lgShare, lgHash],
            licenseKey: 'your_license_key',
            speed: 500
        });
        
    })


    function proyectoImgDelay(){
        let t = 1
        let x = galeria
         auxGaleria = []
        x?.map((val,i)=>{
            auxGaleria = [...auxGaleria,t==2?500:t==3?700:200]
          
            t++;
            if(t==4) t=1
        })
        charged = true

    }
    

</script>
<link rel="preload" href="{proyecto.imagen_portada}" as="image">
<div class="proyectos-page">
  
    <div class="proyect-title" id="portada">
        <div class="shadow-top"></div>
        <div class=" parallax" style="background-image: url('{proyecto.imagen_portada}');"></div>
            <div class="proyect-title_caption">
                <p>{proyecto.nombre}</p>
        </div>
    </div>
    <!--
    {#if proyecto}
    <div class="title title-right " data-aos="zoom-in-left">
        <h2 class="mr-2">{proyecto?.nombre}</h2><hr>
    </div>
    {/if}
-->
    <div class="container mt-5">
        
        <div class="row justify-content-center mb-5">
         
            <div id="lightgallery">
              
                    {#each galeria as img,i }
                        <a data-aos="fade-in" href="{img}" data-lg-size="1600-2400" data-aos-delay="{auxGaleria[i]}">
                            <img class="imagen-gallery" alt="" src="{img}" />
                        </a>
                    {/each}
                
            </div>
      
        </div>
  
        {#if proyecto?.vista360_src}
        <div class="row justify-content-center mt-3 mb-sm-5" data-aos="fade-in">
            <div class="col-12 ">
                <div data-aos="zoom-in-right" class="title mt-5 mb-2" >
                    <hr><h2>Vista 360°</h2>
                </div>
                
                <iframe data-aos="zoom-in-right"  class="box-shadow" width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="{proyecto.vista360_src}"></iframe>
            </div>
        </div>
        {/if}

        {#if proyecto?.descripcion}
        <div class="row justify-content-center mt-3 mb-sm-5" data-aos="fade-in">
            <div class="col-sm-5 col-9 ">
                <hr class="separation-line my-sm-5">
                <p class="my-5 pt-sm-5 text-center">{proyecto?.descripcion?proyecto?.descripcion:''}</p>
            </div>
        </div>
        {/if}

        

    </div>
    
    <br><br><br>
  
</div>

<style>
     .title{margin: 7em 0;}
     .proyect-title{width: 100%; height: 100vh; position: relative;}
     .proyect-title_img{width: 100%; height: 100vh; object-fit: cover;}
     .proyect-title_caption{text-decoration: none;color: white; position: absolute; z-index: 11; font-size: 35px; text-align:center;bottom: 10%;width: 100%;letter-spacing: 4px;font-weight: 700;text-transform: uppercase;opacity: 80%;transition: opacity 1s ease-in-out; -moz-transition: opacity 1s ease-in-out; -webkit-transition: opacity 1s ease-in-out;}
     .proyect-title .shadow-top:hover{opacity: 100}
     .parallax{height:100vh;}
 
    @media only screen and (max-width: 600px) {
        .title{margin: 3em 0;}
 }
</style>