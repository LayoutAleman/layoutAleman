import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../../../chunks/ssr.js";
import { p as paginas } from "../../../../chunks/stores.js";
const css = {
  code: ".pagina-scouting.svelte-dmt79c.svelte-dmt79c{letter-spacing:2px;font-weight:300}.scroll-part.svelte-dmt79c.svelte-dmt79c{background-color:#f9f9f9;padding-bottom:2em}.scouting-p.svelte-dmt79c.svelte-dmt79c{margin-bottom:10em}.scouting-p.svelte-dmt79c p.svelte-dmt79c{padding:0 7% 0 8%}.scouting-p.svelte-dmt79c video.svelte-dmt79c{width:100%;height:auto}.scroll-part.svelte-dmt79c.svelte-dmt79c::-webkit-scrollbar{width:10px}.scroll-part.svelte-dmt79c.svelte-dmt79c::-webkit-scrollbar-track{background:#f9f9f9}.scroll-part.svelte-dmt79c.svelte-dmt79c::-webkit-scrollbar-thumb{background-color:black;border:3px solid #f9f9f9}.progress.svelte-dmt79c.svelte-dmt79c{height:.3rem;background:rgb(0, 0, 0);position:fixed;top:0;left:0;width:100%;transform-origin:0 50%;animation:svelte-dmt79c-scaleProgress auto linear;animation-timeline:scroll(root)}@keyframes svelte-dmt79c-scaleProgress{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}@media only screen and (max-width: 600px){.scouting-p.svelte-dmt79c p.svelte-dmt79c{text-align:justify;margin-bottom:30px}#parr_2.svelte-dmt79c.svelte-dmt79c{flex-direction:column-reverse}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import {paginas} from '$lib/stores'\\n    import { onMount } from 'svelte';\\n    let video_1 = $paginas?.scouting?.video_1?$paginas.scouting.video_1:'https://apivideo-demo.s3.amazonaws.com/hello.mp4'\\n    let descripcion_1 = $paginas?.scouting?.desc_1\\n    let descripcion_2 = $paginas?.scouting?.desc_2\\n    let descripcion_3 = $paginas?.scouting?.desc_3\\n    let video_2 = $paginas?.scouting?.video_2?$paginas.scouting.video_2:'https://apivideo-demo.s3.amazonaws.com/hello.mp4'\\n    let video_3 = $paginas?.scouting?.video_2?$paginas.scouting.video_2:'https://apivideo-demo.s3.amazonaws.com/hello.mp4'\\n\\n    onMount(()=>{\\n        playPauseVideo()\\n    })\\n    function playPauseVideo() {\\n        \\n        let videos = document.querySelectorAll(\\"video\\");\\n        videos.forEach((video) => {\\n            // We can only control playback without insteraction if video is mute\\n            video.muted = true;\\n            // Play is a promise so we need to check we have it\\n            let playPromise = video.play();\\n            if (playPromise !== undefined) {\\n                playPromise.then((_) => {\\n                    let observer = new IntersectionObserver(\\n                        (entries) => {\\n                            entries.forEach((entry) => {\\n                                if (\\n                                    entry.intersectionRatio !== 1 &&\\n                                    !video.paused\\n                                ) {\\n                                    video.pause();\\n                                } else if (video.paused) {\\n                                    video.play();\\n                                }\\n                            });\\n                        },\\n                        { threshold: 0.2 }\\n                    );\\n                    observer.observe(video);\\n                });\\n            }\\n        });\\n    }\\n<\/script>\\n<div class=\\"pagina-scouting pb-3\\">\\n\\n    \\n    <div class=\\"title title4 my-3\\" data-aos=\\"fade-right\\">\\n        <hr class=\\"ml-0\\"><h2>SCOUTING</h2>\\n    </div>\\n  \\n    <div class=\\"scroll-part\\">\\n       \\n        <div class=\\"row mx-0 scouting-p  align-items-center \\">\\n            <div class=\\"progress\\"></div>\\n            <div class=\\"pl-0 col-12 col-sm-6 p-relative\\">\\n                <p data-aos=\\"fade-in\\">{@html descripcion_1}</p>\\n            </div>\\n            <div class=\\"col-12 col-sm-6 p-0\\" data-aos=\\"fade-up\\">\\n                <video  playsinline loop class=\\"box-shadow\\" >\\n                    <source src=\\"{video_1}\\" type=\\"video/mp4\\">\\n                    Your browser does not support the video tag.\\n                  </video>\\n            </div>\\n        </div>\\n    \\n        <div id=\\"parr_2\\" class=\\"row mx-0 scouting-p align-items-center \\">\\n            <div class=\\"col-12 col-sm-6 p-0\\" data-aos=\\"fade-up\\">\\n                <video  playsinline loop class=\\"box-shadow\\">\\n                    <source src=\\"{video_2}\\" type=\\"video/mp4\\">\\n                    Your browser does not support the video tag.\\n                  </video>\\n            </div>\\n            <div class=\\"pl-0 col-12 col-sm-6 p-relative\\">\\n                <p data-aos=\\"fade-in\\" class=\\"text-right\\">{@html descripcion_2}</p>\\n            </div>\\n           \\n        </div>\\n    \\n        <div   class=\\"row mx-0 scouting-p align-items-center\\">\\n            <div class=\\"pl-0 col-12 col-sm-6 p-relative\\">\\n                <p >{@html descripcion_3}</p>\\n            </div>\\n            <div class=\\"col-12 col-sm-6 p-0\\"  >\\n                <video playsinline loop class=\\"box-shadow\\" >\\n                    <source src=\\"{video_3}\\" type=\\"video/mp4\\">\\n                    Your browser does not support the video tag.\\n                  </video>\\n            </div>\\n        </div>\\n    </div>\\n    \\n</div>\\n\\n<style>\\n    .pagina-scouting{letter-spacing: 2px; font-weight: 300; }\\n    .scroll-part{ background-color: #f9f9f9; padding-bottom: 2em;}/**height: 70vh; overflow-y: scroll;*/\\n    .scouting-p{margin-bottom: 10em;}\\n    .scouting-p p{padding: 0 7% 0 8%;}\\n    .scouting-p video{width: 100%; height: auto;}\\n    .scroll-part::-webkit-scrollbar {\\n    width: 10px;               /* width of the entire scrollbar */\\n    }\\n\\n    .scroll-part::-webkit-scrollbar-track {\\n    background: #f9f9f9;        /* color of the tracking area */\\n    }\\n\\n    .scroll-part::-webkit-scrollbar-thumb {\\n    background-color: black;  /* roundness of the scroll thumb */\\n\\n    border: 3px solid #f9f9f9;  /* creates padding around scroll thumb */\\n    }\\n\\n.progress {\\n  height: .3rem;\\n  background: rgb(0, 0, 0);\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  transform-origin: 0 50%;\\n  animation: scaleProgress auto linear;\\n  animation-timeline: scroll(root);\\n}\\n\\n@keyframes scaleProgress {\\n  0% {\\n    transform: scaleX(0);\\n  }\\n  100% {\\n    transform: scaleX(1);\\n  }\\n  }\\n\\n  @media only screen and (max-width: 600px){\\n   .scouting-p p{    text-align: justify;margin-bottom: 30px;}\\n   #parr_2{flex-direction: column-reverse;}\\n  }\\n</style>"],"names":[],"mappings":"AA+FI,4CAAgB,CAAC,cAAc,CAAE,GAAG,CAAE,WAAW,CAAE,GAAK,CACxD,wCAAY,CAAE,gBAAgB,CAAE,OAAO,CAAE,cAAc,CAAE,GAAI,CAC7D,uCAAW,CAAC,aAAa,CAAE,IAAK,CAChC,yBAAW,CAAC,eAAC,CAAC,OAAO,CAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAG,CACjC,yBAAW,CAAC,mBAAK,CAAC,KAAK,CAAE,IAAI,CAAE,MAAM,CAAE,IAAK,CAC5C,wCAAY,mBAAoB,CAChC,KAAK,CAAE,IACP,CAEA,wCAAY,yBAA0B,CACtC,UAAU,CAAE,OACZ,CAEA,wCAAY,yBAA0B,CACtC,gBAAgB,CAAE,KAAK,CAEvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAClB,CAEJ,qCAAU,CACR,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACxB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,CAAC,CAAC,GAAG,CACvB,SAAS,CAAE,2BAAa,CAAC,IAAI,CAAC,MAAM,CACpC,kBAAkB,CAAE,OAAO,IAAI,CACjC,CAEA,WAAW,2BAAc,CACvB,EAAG,CACD,SAAS,CAAE,OAAO,CAAC,CACrB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,CAAC,CACrB,CACA,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CACxC,yBAAW,CAAC,eAAC,CAAK,UAAU,CAAE,OAAO,CAAC,aAAa,CAAE,IAAK,CAC1D,mCAAO,CAAC,cAAc,CAAE,cAAe,CACxC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $paginas, $$unsubscribe_paginas;
  $$unsubscribe_paginas = subscribe(paginas, (value) => $paginas = value);
  let video_1 = $paginas?.scouting?.video_1 ? $paginas.scouting.video_1 : "https://apivideo-demo.s3.amazonaws.com/hello.mp4";
  let descripcion_1 = $paginas?.scouting?.desc_1;
  let descripcion_2 = $paginas?.scouting?.desc_2;
  let descripcion_3 = $paginas?.scouting?.desc_3;
  let video_2 = $paginas?.scouting?.video_2 ? $paginas.scouting.video_2 : "https://apivideo-demo.s3.amazonaws.com/hello.mp4";
  let video_3 = $paginas?.scouting?.video_2 ? $paginas.scouting.video_2 : "https://apivideo-demo.s3.amazonaws.com/hello.mp4";
  $$result.css.add(css);
  $$unsubscribe_paginas();
  return `<div class="pagina-scouting pb-3 svelte-dmt79c"><div class="title title4 my-3" data-aos="fade-right" data-svelte-h="svelte-3ybacd"><hr class="ml-0"><h2>SCOUTING</h2></div> <div class="scroll-part svelte-dmt79c"><div class="row mx-0 scouting-p align-items-center  svelte-dmt79c"><div class="progress svelte-dmt79c"></div> <div class="pl-0 col-12 col-sm-6 p-relative"><p data-aos="fade-in" class="svelte-dmt79c"><!-- HTML_TAG_START -->${descripcion_1}<!-- HTML_TAG_END --></p></div> <div class="col-12 col-sm-6 p-0" data-aos="fade-up"><video playsinline loop class="box-shadow svelte-dmt79c"><source${add_attribute("src", video_1, 0)} type="video/mp4">
                    Your browser does not support the video tag.</video></div></div> <div id="parr_2" class="row mx-0 scouting-p align-items-center  svelte-dmt79c"><div class="col-12 col-sm-6 p-0" data-aos="fade-up"><video playsinline loop class="box-shadow svelte-dmt79c"><source${add_attribute("src", video_2, 0)} type="video/mp4">
                    Your browser does not support the video tag.</video></div> <div class="pl-0 col-12 col-sm-6 p-relative"><p data-aos="fade-in" class="text-right svelte-dmt79c"><!-- HTML_TAG_START -->${descripcion_2}<!-- HTML_TAG_END --></p></div></div> <div class="row mx-0 scouting-p align-items-center svelte-dmt79c"><div class="pl-0 col-12 col-sm-6 p-relative"><p class="svelte-dmt79c"><!-- HTML_TAG_START -->${descripcion_3}<!-- HTML_TAG_END --></p></div> <div class="col-12 col-sm-6 p-0"><video playsinline loop class="box-shadow svelte-dmt79c"><source${add_attribute("src", video_3, 0)} type="video/mp4">
                    Your browser does not support the video tag.</video></div></div></div> </div>`;
});
export {
  Page as default
};