import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../../../chunks/ssr.js";
import { p as paginas } from "../../../../chunks/stores.js";
import "lightgallery";
import "lightgallery/plugins/thumbnail/lg-thumbnail.es5.js";
import "lightgallery/plugins/zoom/lg-zoom.es5.js";
const css = {
  code: ".pagina-layout.svelte-7ljkc1 img.svelte-7ljkc1,.imagen-layout.svelte-7ljkc1.svelte-7ljkc1{width:100%}.pr-5.svelte-7ljkc1.svelte-7ljkc1{padding-right:6em}.pagina-layout.svelte-7ljkc1 p.svelte-7ljkc1{padding-left:3em}.pagina-layout.svelte-7ljkc1.svelte-7ljkc1{letter-spacing:2px;font-weight:300}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import {paginas} from '$lib/stores'\\n    import lightGallery from 'lightgallery';\\n     import lgThumbnail from 'lightgallery/plugins/thumbnail'\\n    import lgZoom from 'lightgallery/plugins/zoom'\\n    import { onMount } from 'svelte';\\n    let layout_img = $paginas?.layout?.layout_img\\n    let layout_desc = $paginas?.layout?.layout_desc\\n\\n    onMount(()=>{\\n        \\n        lightGallery(document.getElementById('lightgallery2'), {\\n            plugins: [lgZoom, lgThumbnail],\\n            licenseKey: 'your_license_key',\\n            speed: 500\\n        });\\n        \\n    })\\n<\/script>\\n\\n<div class=\\"pagina-layout pb-3\\">\\n\\n   \\n\\n    <div class=\\"\\" data-aos=\\"fade-in\\" data-aos-duration=\\"2000\\">\\n        <div class=\\"row mx-0 scouting-p my-5 \\">\\n            <div class=\\"pt-sm-5 pl-0 pr-5 col-12 col-sm-6 p-relative\\">\\n                <div data-aos=\\"fade-right\\" class=\\"title title4 my-3\\" >\\n                    <hr class=\\"ml-0\\"><h2>LAYOUTS</h2>\\n                </div>\\n                <p class=\\"pl-3\\" data-aos=\\"fade-in\\">{@html layout_desc}</p>\\n            </div>\\n            <div class=\\"col-12 col-sm-6 p-0\\" data-aos=\\"fade-up\\">\\n                <div id=\\"lightgallery2\\">\\n                    <a data-aos=\\"fade-in\\" href=\\"{layout_img}\\" data-lg-size=\\"1600-2400\\">\\n                        <img class=\\"imagen-layout\\" alt=\\"Layouts\\" src=\\"{layout_img}\\" />\\n                    </a>\\n                </div>\\n                <!--\\n                <img src=\\"{layout_img}\\" alt=\\"\\">-->\\n            </div>\\n        </div>\\n    </div>\\n   \\n\\n</div>\\n\\n<style>\\n    .pagina-layout img,.imagen-layout{width: 100%;}\\n    .pr-5{padding-right: 6em;}\\n    .pagina-layout p{padding-left: 3em;}\\n    .pagina-layout{letter-spacing: 2px; font-weight: 300; }\\n</style>"],"names":[],"mappings":"AAgDI,4BAAc,CAAC,iBAAG,CAAC,0CAAc,CAAC,KAAK,CAAE,IAAK,CAC9C,iCAAK,CAAC,aAAa,CAAE,GAAI,CACzB,4BAAc,CAAC,eAAC,CAAC,YAAY,CAAE,GAAI,CACnC,0CAAc,CAAC,cAAc,CAAE,GAAG,CAAE,WAAW,CAAE,GAAK"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $paginas, $$unsubscribe_paginas;
  $$unsubscribe_paginas = subscribe(paginas, (value) => $paginas = value);
  let layout_img = $paginas?.layout?.layout_img;
  let layout_desc = $paginas?.layout?.layout_desc;
  $$result.css.add(css);
  $$unsubscribe_paginas();
  return `<div class="pagina-layout pb-3 svelte-7ljkc1"><div class="" data-aos="fade-in" data-aos-duration="2000"><div class="row mx-0 scouting-p my-5 "><div class="pt-sm-5 pl-0 pr-5 col-12 col-sm-6 p-relative svelte-7ljkc1"><div data-aos="fade-right" class="title title4 my-3" data-svelte-h="svelte-s40hvg"><hr class="ml-0"><h2>LAYOUTS</h2></div> <p class="pl-3 svelte-7ljkc1" data-aos="fade-in"><!-- HTML_TAG_START -->${layout_desc}<!-- HTML_TAG_END --></p></div> <div class="col-12 col-sm-6 p-0" data-aos="fade-up"><div id="lightgallery2"><a data-aos="fade-in"${add_attribute("href", layout_img, 0)} data-lg-size="1600-2400"><img class="imagen-layout svelte-7ljkc1" alt="Layouts"${add_attribute("src", layout_img, 0)}></a></div> </div></div></div> </div>`;
});
export {
  Page as default
};
