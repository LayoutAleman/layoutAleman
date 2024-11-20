<script>
    import { onMount } from "svelte";
    import {proyectos,generales} from "../../lib/stores"
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "$lib/firebase.client";
    import { goto } from "$app/navigation";
    import { fly} from 'svelte/transition';
    let x = []
    let makebigpic = []
    let loading = true
    onMount(async ()=>{
    
      
       
        if($proyectos.length==0) getProjects()
        else proyectoImgDelay()


     
    })
    function proyectoImgDelay(){
        let t = 1
        $proyectos?.map((val,i)=>{
      
            $proyectos[i].delay = t==2?500:t==3?700:200
            t++;
            if(t==4) t=1
        })

        loading = false

    }

    async function getProjects() {
      
        x = []
        const querySnapshot = await getDocs(collection(db, "proyectos"))
        querySnapshot.forEach((doc) => {x = [...x,{...doc.data(),id:doc.id}];});
        x.sort((a, b) => {
            const aPos = a.pos !== undefined && a.pos !== null ? a.pos : Infinity;
            const bPos = b.pos !== undefined && b.pos !== null ? b.pos : Infinity;
            return aPos - bPos;
        });
        $proyectos = x

        proyectoImgDelay();

 
    }

    async function abrirProyecto(i,proy){
        makebigpic[i] = true
        setTimeout( () => {
            goto('/proyectos/'+proy.id+'#portada')
        }, 1600);
        
    }



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
  }
}

</script>



<div class="proyectos-page">
    {#if !loading}
    
   
    <div class="title my-5" data-aos="fade-right">
        <hr><h2>PROYECTOS</h2>
    </div>

    <div class="container mb-5">
        <div class="row">
            {#each $proyectos as proyecto,i}
                <div class="col-sm-4 col-12 mb-sm-5 mb-4 {makebigpic[i]?'makebigpic':''}" >
                    <a data-sveltekit-preload-data class="project-card_link project-card-phone" href="/proyectos/{proyecto.id}">
                        <div class="project-card" data-aos="fade-in" >
                            <div class="shadow-top"></div>
                                <img class="project-card_img" src="{proyecto.imagen_portada}" alt="">
                           
                            <div class="project-card_caption">
                                <p>{proyecto.nombre}</p>
                            </div>
                        </div>
                    </a>

                    <a data-sveltekit-preload-data data-aos="fade-in" class="project-card_link project-card-desk" data-aos-delay="{proyecto.delay}" on:click={()=>abrirProyecto(i,proyecto)}>
                        <div class="project-card" >
                            <div class="shadow-top"></div>
                                <img class="project-card_img" src="{proyecto.imagen_portada}" alt="">
                            <div class="project-card_caption">
                                <p>{proyecto.nombre}</p>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
            
        </div>
    </div>
    {/if}
</div>


<style>
    .project-card-phone{display: none;}
    .project-card-desk{display: block;}
        .proyectos-page{min-height: 65vh;}
    .project-card{box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);position: relative;  transition: 0.3s all ease;}
    .shadow-top,.project-card_link,.project-card_caption{cursor: pointer;}
    .project-card_img{width: 100%; object-fit: cover; height: 300px;}
    .project-card_caption{text-decoration: none;color: white; position: absolute; z-index: 11; font-size: 16px; text-align:center;bottom: 10%;width: 100%;letter-spacing: 4px;font-weight: 700;text-transform: uppercase;opacity: 80%;transition: opacity 1s ease-in-out; -moz-transition: opacity 1s ease-in-out; -webkit-transition: opacity 1s ease-in-out;}
    .project-card_link:hover .project-card_caption{opacity: 0;transition: opacity 1s ease-in-out; -moz-transition: opacity 1s ease-in-out; -webkit-transition: opacity 1s ease-in-out;}
    .makebigpic{position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;    height: 100vh; z-index: 12;transition: width 2s, height 2s;}
    .makebigpic div,.makebigpic img{ height: 100vh}
    .makebigpic .project-card_caption{height: auto;transition: width 2s, height 2s;font-size: 35px;}
    .makebigpic .project-card_link:hover .project-card_caption{opacity: 100;}
    .makebigpic .shadow-top{transition: width 2s, height 1s;}
    @media only screen and (max-width: 600px) {
        .project-card-phone{display: block;}
        .project-card-desk{display: none;}
    }

</style>