import { c as create_ssr_component, a as subscribe, v as validate_component, i as each, b as add_attribute } from "../../../../chunks/ssr.js";
import { p as paginas } from "../../../../chunks/stores.js";
import { S as Splide_1, a as SplideSlide } from "../../../../chunks/SplideSlide.js";
const css = {
  code: ".pagina-renders.svelte-1biywb.svelte-1biywb{letter-spacing:2px;font-weight:300}.carrousel_img.svelte-1biywb.svelte-1biywb{width:100%}.section-360.svelte-1biywb img.svelte-1biywb{opacity:10%;width:40%}.section-360.svelte-1biywb h1.svelte-1biywb{padding-top:1em;font-weight:700}@media only screen and (max-width: 600px){.carrousel_img.svelte-1biywb.svelte-1biywb{height:80vh;object-fit:cover}.section-360.svelte-1biywb.svelte-1biywb{text-align:justify}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import {paginas} from '$lib/stores'\\n    import { Splide, SplideSlide } from '@splidejs/svelte-splide';\\n  \\n    $: carousel_images = $paginas.renders.carrusel?$paginas.renders.carrusel:[]\\n    let desc_1 =$paginas.renders.desc_1?$paginas.renders.desc_1:''\\n    let desc_2 =$paginas.renders.desc_2?$paginas.renders.desc_2:''\\n    let img_vr =$paginas.renders.img_vr?$paginas.renders.img_vr:''\\n    let vista360_src = $paginas.renders.vista360_src\\n<\/script>\\n<div class=\\"pagina-renders\\">\\n\\n    \\n\\n    <div class=\\"row mx-0 scouting-p mt-3 \\">\\n        <div class=\\"pl-0 col-12 p-relative\\">\\n          \\n            <div  data-aos=\\"fade-right\\" class=\\"title \\">\\n                <hr class=\\"ml-0\\"><h2>RENDERS</h2>\\n            </div>\\n          \\n        </div>\\n       \\n    </div>\\n    <div class=\\"col-12 mb-5\\"  data-aos=\\"fade-in\\">\\n        <Splide class=\\"carrousel-render splide box-shadow\\" options=\\"{{autoplay:true,type  : 'loop',rewind: true,interval:3000,padding: '5rem',\\n  focus  : 'center', breakpoints: {640: {padding: 0,}} }}\\" aria-label=\\"My Favorite Images\\">\\n                    {#each carousel_images as image }\\n                    <SplideSlide class=\\"carrouser-home_slide\\">\\n                        <img src='{image}' alt=\\"Image 1\\" class=\\"carrousel_img\\"/>\\n                      </SplideSlide>\\n                    {/each}\\n                    \\n        </Splide>\\n        \\n    </div>\\n    <div class=\\"col-12 mb-5\\"  data-aos=\\"zoom-in\\">\\n        <div class=\\"row mx-0 justify-content-center v360\\">\\n            <div class=\\"col-sm-7 col-11 mb-5 text-center\\">\\n                <p>{@html desc_1 }</p>\\n                \\n            </div>\\n           \\n        </div>\\n        <div class=\\"row mx-0 justify-content-center\\">\\n            <hr data-aos=\\"fade-up\\" class=\\"separation_line my-sm-5\\">\\n        </div>\\n    </div>\\n\\n    <div class=\\"container\\" data-aos=\\"fade-up\\">\\n        <div class=\\"row justify-content-center sectionex\\" id='vista360'>\\n           \\n            <div class=\\"col-12 \\" data-aos=\\"fade-in\\">\\n                <iframe class=\\"box-shadow\\" width=\\"100%\\" height=\\"640\\" frameborder=\\"0\\" allow=\\"xr-spatial-tracking; gyroscope; accelerometer\\" allowfullscreen scrolling=\\"no\\" src=\\"{vista360_src}\\"></iframe>\\n    \\n            </div>\\n           \\n        </div>\\n    </div>\\n    <div class=\\"container\\">\\n        <div class=\\"row align-items-center p-sm-5 p-3 section-360 mb-5\\">\\n            <div class=\\"col-sm-6 col-12 text-justify\\"  data-aos=\\"fade-right\\">\\n                <p>{@html desc_2 }</p>\\n            </div>\\n            <div data-aos=\\"fade-down\\" class=\\"col-sm-6 col-12 text-center\\">\\n                <img src=\\"{img_vr}\\" alt=\\"\\">\\n                <h1>VISTA 360°</h1>\\n            </div>\\n        </div>\\n    </div>\\n    \\n</div>\\n\\n<style>\\n    .pagina-renders{letter-spacing: 2px; font-weight: 300;}\\n    .carrousel_img{width: 100%;}\\n    .section-360 img{opacity: 10%; width: 40%;}\\n    .section-360 h1{padding-top: 1em;font-weight: 700;}\\n    @media only screen and (max-width: 600px) {\\n        .carrousel_img{height: 80vh;object-fit: cover;}\\n        .section-360{text-align: justify;}\\n    }\\n</style>"],"names":[],"mappings":"AA0EI,2CAAe,CAAC,cAAc,CAAE,GAAG,CAAE,WAAW,CAAE,GAAI,CACtD,0CAAc,CAAC,KAAK,CAAE,IAAK,CAC3B,0BAAY,CAAC,iBAAG,CAAC,OAAO,CAAE,GAAG,CAAE,KAAK,CAAE,GAAI,CAC1C,0BAAY,CAAC,gBAAE,CAAC,WAAW,CAAE,GAAG,CAAC,WAAW,CAAE,GAAI,CAClD,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACtC,0CAAc,CAAC,MAAM,CAAE,IAAI,CAAC,UAAU,CAAE,KAAM,CAC9C,wCAAY,CAAC,UAAU,CAAE,OAAQ,CACrC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let carousel_images;
  let $paginas, $$unsubscribe_paginas;
  $$unsubscribe_paginas = subscribe(paginas, (value) => $paginas = value);
  let desc_1 = $paginas.renders.desc_1 ? $paginas.renders.desc_1 : "";
  let desc_2 = $paginas.renders.desc_2 ? $paginas.renders.desc_2 : "";
  let img_vr = $paginas.renders.img_vr ? $paginas.renders.img_vr : "";
  let vista360_src = $paginas.renders.vista360_src;
  $$result.css.add(css);
  carousel_images = $paginas.renders.carrusel ? $paginas.renders.carrusel : [];
  $$unsubscribe_paginas();
  return `<div class="pagina-renders svelte-1biywb"><div class="row mx-0 scouting-p mt-3 " data-svelte-h="svelte-i4k94"><div class="pl-0 col-12 p-relative"><div data-aos="fade-right" class="title "><hr class="ml-0"><h2>RENDERS</h2></div></div></div> <div class="col-12 mb-5" data-aos="fade-in">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      class: "carrousel-render splide box-shadow",
      options: {
        autoplay: true,
        type: "loop",
        rewind: true,
        interval: 3e3,
        padding: "5rem",
        focus: "center",
        breakpoints: { 640: { padding: 0 } }
      },
      "aria-label": "My Favorite Images"
    },
    {},
    {
      default: () => {
        return `${each(carousel_images, (image) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "carrouser-home_slide" }, {}, {
            default: () => {
              return `<img${add_attribute("src", image, 0)} alt="Image 1" class="carrousel_img svelte-1biywb"> `;
            }
          })}`;
        })}`;
      }
    }
  )}</div> <div class="col-12 mb-5" data-aos="zoom-in"><div class="row mx-0 justify-content-center v360"><div class="col-sm-7 col-11 mb-5 text-center"><p><!-- HTML_TAG_START -->${desc_1}<!-- HTML_TAG_END --></p></div></div> <div class="row mx-0 justify-content-center" data-svelte-h="svelte-i0z59h"><hr data-aos="fade-up" class="separation_line my-sm-5"></div></div> <div class="container" data-aos="fade-up"><div class="row justify-content-center sectionex" id="vista360"><div class="col-12 " data-aos="fade-in"><iframe class="box-shadow" width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no"${add_attribute("src", vista360_src, 0)}></iframe></div></div></div> <div class="container"><div class="row align-items-center p-sm-5 p-3 section-360 mb-5 svelte-1biywb"><div class="col-sm-6 col-12 text-justify" data-aos="fade-right"><p><!-- HTML_TAG_START -->${desc_2}<!-- HTML_TAG_END --></p></div> <div data-aos="fade-down" class="col-sm-6 col-12 text-center"><img${add_attribute("src", img_vr, 0)} alt="" class="svelte-1biywb"> <h1 class="svelte-1biywb" data-svelte-h="svelte-1m824xa">VISTA 360°</h1></div></div></div> </div>`;
});
export {
  Page as default
};
