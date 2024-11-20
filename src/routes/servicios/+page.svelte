<script>
    import { onMount } from "svelte";
    import {paginas} from "$lib/stores"
    import { fly} from 'svelte/transition';
    import { page } from "$app/stores";
    let layout_desc = $paginas.pagina2.layout_desc
    let render_desc =  $paginas.pagina2.render_desc
    let scouting_desc =  $paginas.pagina2.scouting_desc

    page.subscribe((val)=>{
        
        if(val.route.id=='/servicios'){
            setTimeout(function () {
                if(val.url?.hash =='#render'){window.scrollTo(0,800*2); }
                else if(val.url?.hash =='#layout')window.scrollTo(0,800)
                else window.scrollTo(0,0)
            },1000);
        }
    })
    onMount(()=>{

        const cont = document.querySelector('#cont');
        const image = document.querySelector('#scouting1');
        const image2 = document.querySelector('#layout1');
        const image3 = document.querySelector('#render1');
    
        let { height } = cont.getBoundingClientRect();
        height = height/3 -200
    
        window.addEventListener('scroll', function() {
            if(height> window.scrollY){
                image.style.opacity = 1
                image2.style.opacity = 0;
                image3.style.opacity = 0;
            }
            if(height < window.scrollY && window.scrollY<(height*2)){
                image.style.opacity = 0
                image2.style.opacity = 1;
                image3.style.opacity = 0;
            }
            if((height*2) < window.scrollY){
                image.style.opacity = 0
                image2.style.opacity = 0;
                image3.style.opacity = 1;
            }
            
            
            
        });

       
    })
</script>

<div class="pagina-servicios">
    <div class="servicios" id="cont">
        <div class="servicio parallax" id="scouting1" style="opacity:1;background-image: url({$paginas.pagina2.scouting_img});">
            <div id="desc_1" class="servicio-desc" data-aos="fade-up" >
                <div class="title title2 title-right "  data-aos-duration="1200" >
                    <h2 class="mr-2">SCOUTING</h2><hr>
                </div>
                <div class="section-text">
                    <p class="text-right mt-sm-3">{scouting_desc}</p>
                   
                    <div class="row justify-content-end ">
                        <a  href="/servicios/scouting" class="btn btn-adcent col-sm-4 col-8"  >Descubre mas</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="servicio parallax" id="layout1" style="opacity:0;background-image: url({$paginas.pagina2.layout_img});">
            <div id="desc_2" class="servicio-desc" data-aos="fade-up" >
                <div class="title title2 title-right "  data-aos-duration="1200" >
                    <h2 class="mr-2">LAYOUT</h2><hr>
                </div>
                <div class="section-text">
                    <p class="text-right mt-sm-3">{layout_desc}</p>
                   
                    <div class="row justify-content-end ">
                        <a  href="/servicios/layout" class="btn btn-adcent col-sm-4 col-8"  >Descubre mas</a>
                    </div>
                </div>
            </div>
        </div>



        <div class="servicio parallax" id="render1" style="opacity:0;background-image: url({$paginas.pagina2.render_img});">
            <div id="desc_3" class="servicio-desc" data-aos="fade-up" >
                <div class="title title2 title-right "  data-aos-duration="1200" >
                    <h2 class="mr-2">RENDERS Y 360°</h2><hr>
                </div>
                <div class="section-text">
                    <p class="text-right mt-sm-3">{render_desc}</p>
                   
                    <div class="row justify-content-end ">
                        <a  href="/servicios/renders" class="btn btn-adcent col-sm-4 col-8"  >Descubre mas</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .servicios{
        position: relative; height: 300vh; width: 100%;
    }
    .servicio {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: opacity 3s ease;
    }
    .servicio-desc{background-color: rgba(0, 0, 0, 0.407);color: white; padding: 20px;position: fixed; z-index: 3;width: 500px;right: 0;top: 20%;}
    .servicio-desc a{margin-right: 10px;}

    @media only screen and (max-width: 600px) {
    .servicio-desc{padding: 10px;width: 300px;top: 45%;}
    .parallax{background-size: inherit;}     
    #render1{background-position: bottom;}   
    #scouting1{background-position: top;}
    .section-text{font-size: 15px;}
    .title2{font-size: 22px;}
    }
</style>