<script>
    import {paginas} from '$lib/stores'
    import { onMount } from 'svelte';
    let video_1 = $paginas?.scouting?.video_1?$paginas.scouting.video_1:'https://apivideo-demo.s3.amazonaws.com/hello.mp4'
    let descripcion_1 = $paginas?.scouting?.desc_1
    let descripcion_2 = $paginas?.scouting?.desc_2
    let descripcion_3 = $paginas?.scouting?.desc_3
    let video_2 = $paginas?.scouting?.video_2?$paginas.scouting.video_2:'https://apivideo-demo.s3.amazonaws.com/hello.mp4'
    let video_3 = $paginas?.scouting?.video_2?$paginas.scouting.video_2:'https://apivideo-demo.s3.amazonaws.com/hello.mp4'

    onMount(()=>{
        playPauseVideo()
    })
    function playPauseVideo() {
        
        let videos = document.querySelectorAll("video");
        videos.forEach((video) => {
            // We can only control playback without insteraction if video is mute
            video.muted = true;
            // Play is a promise so we need to check we have it
            let playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then((_) => {
                    let observer = new IntersectionObserver(
                        (entries) => {
                            entries.forEach((entry) => {
                                if (
                                    entry.intersectionRatio !== 1 &&
                                    !video.paused
                                ) {
                                    video.pause();
                                } else if (video.paused) {
                                    video.play();
                                }
                            });
                        },
                        { threshold: 0.2 }
                    );
                    observer.observe(video);
                });
            }
        });
    }
</script>
<div class="pagina-scouting pb-3">

    
    <div class="title title4 my-3" data-aos="fade-right">
        <hr class="ml-0"><h2>SCOUTING</h2>
    </div>
  
    <div class="scroll-part">
       
        <div class="row mx-0 scouting-p  align-items-center ">
            <div class="progress"></div>
            <div class="pl-0 col-12 col-sm-6 p-relative">
                <p data-aos="fade-in">{@html descripcion_1}</p>
            </div>
            <div class="col-12 col-sm-6 p-0" data-aos="fade-up">
                <video  playsinline loop class="box-shadow" >
                    <source src="{video_1}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
            </div>
        </div>
    
        <div id="parr_2" class="row mx-0 scouting-p align-items-center ">
            <div class="col-12 col-sm-6 p-0" data-aos="fade-up">
                <video  playsinline loop class="box-shadow">
                    <source src="{video_2}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
            </div>
            <div class="pl-0 col-12 col-sm-6 p-relative">
                <p data-aos="fade-in" class="text-right">{@html descripcion_2}</p>
            </div>
           
        </div>
    
        <div   class="row mx-0 scouting-p align-items-center">
            <div class="pl-0 col-12 col-sm-6 p-relative">
                <p >{@html descripcion_3}</p>
            </div>
            <div class="col-12 col-sm-6 p-0"  >
                <video playsinline loop class="box-shadow" >
                    <source src="{video_3}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
            </div>
        </div>
    </div>
    
</div>

<style>
    .pagina-scouting{letter-spacing: 2px; font-weight: 300; }
    .scroll-part{ background-color: #f9f9f9; padding-bottom: 2em;}/**height: 70vh; overflow-y: scroll;*/
    .scouting-p{margin-bottom: 10em;}
    .scouting-p p{padding: 0 7% 0 8%;}
    .scouting-p video{width: 100%; height: auto;}
    .scroll-part::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
    }

    .scroll-part::-webkit-scrollbar-track {
    background: #f9f9f9;        /* color of the tracking area */
    }

    .scroll-part::-webkit-scrollbar-thumb {
    background-color: black;  /* roundness of the scroll thumb */

    border: 3px solid #f9f9f9;  /* creates padding around scroll thumb */
    }

.progress {
  height: .3rem;
  background: rgb(0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transform-origin: 0 50%;
  animation: scaleProgress auto linear;
  animation-timeline: scroll(root);
}

@keyframes scaleProgress {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
  }

  @media only screen and (max-width: 600px){
   .scouting-p p{    text-align: justify;margin-bottom: 30px;}
   #parr_2{flex-direction: column-reverse;}
  }
</style>