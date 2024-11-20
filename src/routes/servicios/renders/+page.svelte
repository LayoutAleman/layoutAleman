<script>
    import {paginas} from '$lib/stores'
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  
    $: carousel_images = $paginas.renders.carrusel?$paginas.renders.carrusel:[]
    let desc_1 =$paginas.renders.desc_1?$paginas.renders.desc_1:''
    let desc_2 =$paginas.renders.desc_2?$paginas.renders.desc_2:''
    let img_vr =$paginas.renders.img_vr?$paginas.renders.img_vr:''
    let vista360_src = $paginas.renders.vista360_src
</script>
<div class="pagina-renders">

    

    <div class="row mx-0 scouting-p mt-3 ">
        <div class="pl-0 col-12 p-relative">
          
            <div  data-aos="fade-right" class="title ">
                <hr class="ml-0"><h2>RENDERS</h2>
            </div>
          
        </div>
       
    </div>
    <div class="col-12 mb-5"  data-aos="fade-in">
        <Splide class="carrousel-render splide box-shadow" options="{{autoplay:true,type  : 'loop',rewind: true,interval:3000,padding: '5rem',
  focus  : 'center', breakpoints: {640: {padding: 0,}} }}" aria-label="My Favorite Images">
                    {#each carousel_images as image }
                    <SplideSlide class="carrouser-home_slide">
                        <img src='{image}' alt="Image 1" class="carrousel_img"/>
                      </SplideSlide>
                    {/each}
                    
        </Splide>
        
    </div>
    <div class="col-12 mb-5"  data-aos="zoom-in">
        <div class="row mx-0 justify-content-center v360">
            <div class="col-sm-7 col-11 mb-5 text-center">
                <p>{@html desc_1 }</p>
                
            </div>
           
        </div>
        <div class="row mx-0 justify-content-center">
            <hr data-aos="fade-up" class="separation_line my-sm-5">
        </div>
    </div>

    <div class="container" data-aos="fade-up">
        <div class="row justify-content-center sectionex" id='vista360'>
           
            <div class="col-12 " data-aos="fade-in">
                <iframe class="box-shadow" width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="{vista360_src}"></iframe>
    
            </div>
           
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center p-sm-5 p-3 section-360 mb-5">
            <div class="col-sm-6 col-12 text-justify"  data-aos="fade-right">
                <p>{@html desc_2 }</p>
            </div>
            <div data-aos="fade-down" class="col-sm-6 col-12 text-center">
                <img src="{img_vr}" alt="">
                <h1>VISTA 360°</h1>
            </div>
        </div>
    </div>
    
</div>

<style>
    .pagina-renders{letter-spacing: 2px; font-weight: 300;}
    .carrousel_img{width: 100%;}
    .section-360 img{opacity: 10%; width: 40%;}
    .section-360 h1{padding-top: 1em;font-weight: 700;}
    @media only screen and (max-width: 600px) {
        .carrousel_img{height: 80vh;object-fit: cover;}
        .section-360{text-align: justify;}
    }
</style>