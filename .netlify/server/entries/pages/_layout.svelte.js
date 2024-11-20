import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, o as onDestroy, d as add_styles, v as validate_component, m as missing_component, f as spread, g as escape_object, h as merge_ssr_styles, i as each } from "../../chunks/ssr.js";
import { g as generales, p as paginas } from "../../chunks/stores.js";
import { p as page } from "../../chunks/stores2.js";
import "aos";
import "firebase/firestore";
import "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { u as useToasterStore, t as toast, s as startPause, e as endPause, a as update, p as prefersReducedMotion } from "../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "firebase/compat/app";
const css$a = {
  code: ".footer.svelte-1qp0syw.svelte-1qp0syw{width:100%;background-color:var(--primary-color)}.footer-bottom.svelte-1qp0syw.svelte-1qp0syw{font-size:12px;margin:0;background-color:rgb(62, 62, 62);color:#fffff0bf}.footer-row.svelte-1qp0syw.svelte-1qp0syw{height:100%}.social-icons.svelte-1qp0syw.svelte-1qp0syw{display:flex;list-style:none;justify-content:center;padding-left:0}.social-icons.svelte-1qp0syw a.svelte-1qp0syw{color:white;margin:0 10px;font-size:20px}.contactanos-text.svelte-1qp0syw a.svelte-1qp0syw{color:white;letter-spacing:2px;text-decoration:none;font-size:15px;margin-bottom:0}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\n    import {generales} from '../stores'\\n\\n<\/script>\\n<div data-aos=\\"fade-in\\" >\\n<div class=\\"footer\\">\\n    <div class=\\"footer-row row mx-0 px-5 align-items-center py-2 justify-content-center\\">\\n        \\n        <!--<div class=\\"col-3 \\">\\n            <img class=\\"footer_img\\" src=\\"{logo_blanco}\\" alt=\\"\\">\\n        </div>\\n        -->\\n        <div class=\\"col-sm-3 col-10 pt-3\\">\\n            <p class=\\"contactanos-text text-center\\"><a href=\\"/contacto\\" class=\\"link-71\\">CONTÁCTANOS</a> </p>\\n            <ul class=\\"social-icons\\">\\n                <li><a href=\\"{$generales.contacto.facebook}\\" target=\\"_blank\\"><i class=\\"bi bi-facebook\\"></i></a></li>\\n                <li><a href=\\"{$generales.contacto.instagram}\\" target=\\"_blank\\"><i class=\\"bi bi-instagram\\"></i></a></li>\\n                <li><a href=\\"https://api.whatsapp.com/send?phone={$generales.contacto.whatsapp}\\" target=\\"_blank\\"><i class=\\"bi bi-whatsapp\\"></i></a></li>\\n            </ul>\\n        </div>\\n    </div>\\n</div>\\n<div class=\\"bg-adcent footer-bottom text-center\\">\\n    @Layout Aleman\\n</div>\\n</div>\\n\\n<style>\\n    .footer{width: 100%;  background-color: var(--primary-color);}\\n    .footer_img{max-height: 80px; width: auto;}\\n    .footer-bottom{font-size: 12px; margin: 0;background-color: rgb(62, 62, 62);color:  #fffff0bf;}\\n    .footer-row{height: 100%;}\\n    .social-icons{display: flex; list-style: none; justify-content: center; padding-left: 0;}\\n    .social-icons a{color: white; margin: 0 10px; font-size: 20px; }\\n    .contactanos-text a{color: white; letter-spacing: 2px; text-decoration: none;font-size: 15px; margin-bottom: 0;}\\n    \\n</style>"],"names":[],"mappings":"AA4BI,qCAAO,CAAC,KAAK,CAAE,IAAI,CAAG,gBAAgB,CAAE,IAAI,eAAe,CAAE,CAE7D,4CAAc,CAAC,SAAS,CAAE,IAAI,CAAE,MAAM,CAAE,CAAC,CAAC,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAG,SAAU,CAC9F,yCAAW,CAAC,MAAM,CAAE,IAAK,CACzB,2CAAa,CAAC,OAAO,CAAE,IAAI,CAAE,UAAU,CAAE,IAAI,CAAE,eAAe,CAAE,MAAM,CAAE,YAAY,CAAE,CAAE,CACxF,4BAAa,CAAC,gBAAC,CAAC,KAAK,CAAE,KAAK,CAAE,MAAM,CAAE,CAAC,CAAC,IAAI,CAAE,SAAS,CAAE,IAAM,CAC/D,gCAAiB,CAAC,gBAAC,CAAC,KAAK,CAAE,KAAK,CAAE,cAAc,CAAE,GAAG,CAAE,eAAe,CAAE,IAAI,CAAC,SAAS,CAAE,IAAI,CAAE,aAAa,CAAE,CAAE"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $generales, $$unsubscribe_generales;
  $$unsubscribe_generales = subscribe(generales, (value) => $generales = value);
  $$result.css.add(css$a);
  $$unsubscribe_generales();
  return `<div data-aos="fade-in"><div class="footer svelte-1qp0syw"><div class="footer-row row mx-0 px-5 align-items-center py-2 justify-content-center svelte-1qp0syw"> <div class="col-sm-3 col-10 pt-3"><p class="contactanos-text text-center svelte-1qp0syw" data-svelte-h="svelte-kxzzqp"><a href="/contacto" class="link-71 svelte-1qp0syw">CONTÁCTANOS</a></p> <ul class="social-icons svelte-1qp0syw"><li><a${add_attribute("href", $generales.contacto.facebook, 0)} target="_blank" class="svelte-1qp0syw"><i class="bi bi-facebook"></i></a></li> <li><a${add_attribute("href", $generales.contacto.instagram, 0)} target="_blank" class="svelte-1qp0syw"><i class="bi bi-instagram"></i></a></li> <li><a href="${"https://api.whatsapp.com/send?phone=" + escape($generales.contacto.whatsapp, true)}" target="_blank" class="svelte-1qp0syw"><i class="bi bi-whatsapp"></i></a></li></ul></div></div></div> <div class="bg-adcent footer-bottom text-center svelte-1qp0syw" data-svelte-h="svelte-1ipnpfu">@Layout Aleman</div> </div>`;
});
const css$9 = {
  code: ".navbar.svelte-3x051e.svelte-3x051e{background-color:white}.menu.svelte-3x051e.svelte-3x051e{min-height:65px}.menu-logo.svelte-3x051e.svelte-3x051e{max-width:200px;max-height:80px}.navbar-brand.svelte-3x051e.svelte-3x051e{position:absolute;left:25px;cursor:pointer}.nav-item.svelte-3x051e.svelte-3x051e{margin:0 10px;letter-spacing:2px}.nav-item.svelte-3x051e:hover .nav-link.svelte-3x051e{color:rgba(0, 0, 0, 0.584)}.menu-movil.svelte-3x051e.svelte-3x051e{width:100%;position:fixed;z-index:100;height:100vh;top:0}.menu-movil-center.svelte-3x051e.svelte-3x051e{padding-left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;list-style:none}.menu-movil-center.svelte-3x051e a.svelte-3x051e{font-size:30px;margin:10px 0;color:rgb(42 42 42 / 73%);font-weight:200}.menu-movil_close.svelte-3x051e.svelte-3x051e{border:none;font-size:30px;position:absolute;right:10px;top:10px}.menu-movil-center.svelte-3x051e .active.svelte-3x051e{color:black}.nav-link.svelte-3x051e.svelte-3x051e,.nav-item.svelte-3x051e.svelte-3x051e{cursor:pointer}@media only screen and (max-width: 600px){.navbar-big.svelte-3x051e.svelte-3x051e{display:none}.menu.svelte-3x051e.svelte-3x051e{flex-direction:row}.menu-logo.svelte-3x051e.svelte-3x051e{width:80px;height:auto}.navbar.svelte-3x051e.svelte-3x051e{padding:0}}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n  import {generales} from '$lib/stores'\\n  import { page } from '$app/stores';  \\n  import { fly} from 'svelte/transition';\\n  let scout = false\\n  let layout = false\\n  let render = false\\n  let showMenu = false\\n<\/script>\\n\\n\\n<nav class=\\"navbar navbar-expand-lg \\" data-aos=\\"fade-down\\" >\\n  <div class=\\"container-fluid menu justify-content-end\\">\\n    <a class=\\"navbar-brand\\" href=\\"/\\"><img class=\\"menu-logo\\" src=\\"{$generales?.logos.logo_negro}\\" alt=\\"\\" width=\\"90\\"></a>\\n    <button class=\\"navbar-toggler\\" type=\\"button\\" on:click={()=>showMenu=true}>\\n      <span class=\\"navbar-toggler-icon\\"></span>\\n    </button>\\n\\n    <div class=\\"collapse navbar-collapse navbar-big justify-content-sm-center \\" id=\\"navbarNavDropdown\\">\\n      <ul class=\\"navbar-nav \\">\\n        <li class=\\"nav-item \\" data-aos=\\"fade-up\\" data-aos-delay=\\"100\\">\\n          <a class=\\"nav-link {$page.url.pathname=='/'?'active':''}\\" aria-current=\\"page\\" href=\\"/#inicio\\">Inicio</a>\\n        </li>\\n        <li class=\\"nav-item \\" data-aos=\\"fade-up\\" data-aos-delay=\\"200\\">\\n          <a class=\\"nav-link\\" href=\\"/#quienesSomos\\">¿Quiénes Somos?</a>\\n        </li>\\n        <li class=\\"nav-item dropdown\\" data-aos=\\"fade-up\\" data-aos-delay=\\"300\\">\\n          <a class=\\"nav-link dropdown-toggle {$page.url.pathname.includes('/servicios')?'active':''}\\" href=\\"#\\"  role=\\"button\\" data-bs-toggle=\\"dropdown\\" aria-expanded=\\"false\\">\\n            Servicios\\n          </a>\\n          <ul class=\\"dropdown-menu\\">\\n            <li><a on:mouseenter={()=>scout=true}  on:mouseleave={()=>scout=false} class=\\"dropdown-item\\" href=\\"/servicios\\">Scouting {#if scout}<i class=\\"bi bi-caret-left-fill\\"></i>{/if}</a> </li>\\n            <li><a on:mouseenter={()=>layout=true}  on:mouseleave={()=>layout=false} class=\\"dropdown-item\\" href=\\"/servicios#layout\\">Layout {#if layout}<i class=\\"bi bi-caret-left-fill\\"></i>{/if}</a></li>\\n            <li><a on:mouseenter={()=>render=true}  on:mouseleave={()=>render=false} class=\\"dropdown-item\\" href=\\"/servicios#render\\">Renders {#if render}<i class=\\"bi bi-caret-left-fill\\"></i>{/if}</a></li>\\n          </ul>\\n        </li>\\n       \\n        <li class=\\"nav-item\\" data-aos=\\"fade-up\\" data-aos-delay=\\"400\\">\\n          <a class=\\"nav-link {$page.url.pathname.includes('/proyectos')?'active':''}\\" href=\\"/proyectos\\">Proyectos</a>\\n        </li>\\n        <!--\\n        <li class=\\"nav-item\\">\\n          <a class=\\"nav-link\\" href=\\"#\\">Scouting</a>\\n        </li>\\n        <li class=\\"nav-item\\">\\n          <a class=\\"nav-link\\" href=\\"#\\">Layouts</a>\\n        </li>\\n        <li class=\\"nav-item dropdown\\">\\n          <a class=\\"nav-link dropdown-toggle\\" href=\\"#\\" role=\\"button\\" data-bs-toggle=\\"dropdown\\" aria-expanded=\\"false\\">\\n            Renders\\n          </a>\\n          <ul class=\\"dropdown-menu\\">\\n            <li><a class=\\"dropdown-item\\" href=\\"#\\">Vistas</a></li>\\n            <li><a class=\\"dropdown-item\\" href=\\"#\\">360</a></li>\\n          </ul>\\n        </li>\\n        -->\\n        <li class=\\"nav-item\\" data-aos=\\"fade-up\\" data-aos-delay=\\"500\\">\\n          <a class=\\"nav-link {$page.url.pathname=='/contacto'?'active':''}\\" href=\\"/contacto\\">Contáctanos</a>\\n        </li>\\n        \\n      </ul>\\n     \\n    </div>\\n  \\n  </div>\\n  \\n  \\n</nav>\\n\\n\\n{#if showMenu}\\n<nav class=\\"navbar navbar-expand-lg bg-white menu-movil\\" transition:fly >\\n  <button data-aos=\\"zoom-out\\" data-aos-delay=\\"200\\" class=\\"navbar-toggler menu-movil_close\\" type=\\"button\\" on:click={()=>showMenu=false}>\\n    <i class=\\"bi bi-x-lg\\"></i>\\n  </button>\\n\\n  <ul class=\\"menu-movil-center\\">\\n    <li class=\\"nav-item \\" data-aos=\\"fade-right\\" data-aos-delay=\\"300\\">\\n      <a on:click={()=>showMenu=false} class=\\"nav-link {$page.url.pathname=='/'?'active':''}\\" aria-current=\\"page\\" href=\\"/#inicio\\">Inicio</a>\\n    </li>\\n    <li class=\\"nav-item \\" data-aos=\\"fade-right\\" data-aos-delay=\\"400\\">\\n      <a on:click={()=>showMenu=false} class=\\"nav-link\\" href=\\"/#quienesSomos\\">¿Quiénes Somos?</a>\\n    </li>\\n    <li class=\\"nav-link link-dark\\" data-aos=\\"fade-right\\" data-aos-delay=\\"500\\">\\n      <a class=\\"align-items-center dropdown-toggle {$page.url.pathname.includes('/servicios')?'active':''}\\" data-bs-toggle=\\"collapse\\" href=\\"#home-collapse2\\" aria-expanded=\\"true\\">\\n           Servicios\\n      </a>\\n      <div data-aos=\\"fade-right\\" data-aos-delay=\\"600\\" class=\\"collapse submenus mt-2\\" id=\\"home-collapse2\\" style=\\"\\">\\n        <ul class=\\"btn-toggle-nav list-unstyled fw-normal pb-1 small\\">\\n          <li><a on:click={()=>showMenu=false} class=\\"dropdown-item\\" href=\\"/servicios\\">Scouting </a> </li>\\n          <li><a on:click={()=>showMenu=false} class=\\"dropdown-item\\" href=\\"/servicios#layout\\">Layout </a></li>\\n          <li><a on:click={()=>showMenu=false} class=\\"dropdown-item\\" href=\\"/servicios#render\\">Renders </a></li>\\n       \\n        </ul>\\n      </div>\\n    </li>\\n    <li class=\\"nav-item\\" data-aos=\\"fade-right\\" data-aos-delay=\\"700\\">\\n      <a on:click={()=>showMenu=false} class=\\"nav-link {$page.url.pathname.includes('/proyectos')?'active':''}\\" href=\\"/proyectos\\">Proyectos</a>\\n    </li>\\n    <li class=\\"nav-item\\" data-aos=\\"fade-right\\" data-aos-delay=\\"800\\">\\n      <a on:click={()=>showMenu=false} class=\\"nav-link {$page.url.pathname=='/contacto'?'active':''}\\" href=\\"/contacto\\">Contáctanos</a>\\n    </li>\\n  </ul>  \\n</nav>\\n{/if}\\n\\n\\n<style>\\n  .navbar{background-color: white;}\\n.menu{    min-height: 65px;}\\n  .menu-logo{ max-width: 200px;max-height: 80px;}\\n  .navbar-brand{position: absolute;    left: 25px; cursor: pointer;}\\n  .nav-item{margin: 0 10px; letter-spacing: 2px;}\\n \\n  .nav-item:hover .nav-link{color:rgba(0, 0, 0, 0.584)}\\n  .menu-movil{width: 100%; position: fixed; z-index: 100;height: 100vh;top: 0;}\\n  .menu-movil-center{padding-left: 0; width: 100%;height: 100%; display: flex; flex-direction: column; justify-content: center;align-items: center;list-style: none;}\\n  .menu-movil-center a{font-size: 30px;margin: 10px 0; color: rgb(42 42 42 / 73%);font-weight: 200;}\\n  .menu-movil_close{border: none; font-size: 30px; position: absolute; right: 10px; top: 10px;}\\n  .menu-movil-center .active{color: black;}\\n  .nav-link,.nav-item{cursor: pointer;}\\n  @media only screen and (max-width: 600px) {\\n   .navbar-big{display: none;}\\n    .menu{flex-direction: row;}\\n    .separation_line {width: 100%;}\\n    .menu-logo{ width: 80px;height: auto;}\\n    .separation_line{margin: 5px 0;}\\n    .navbar{padding: 0;}\\n  }\\n    \\n</style>\\n"],"names":[],"mappings":"AA6GE,mCAAO,CAAC,gBAAgB,CAAE,KAAM,CAClC,iCAAK,CAAK,UAAU,CAAE,IAAK,CACzB,sCAAU,CAAE,SAAS,CAAE,KAAK,CAAC,UAAU,CAAE,IAAK,CAC9C,yCAAa,CAAC,QAAQ,CAAE,QAAQ,CAAK,IAAI,CAAE,IAAI,CAAE,MAAM,CAAE,OAAQ,CACjE,qCAAS,CAAC,MAAM,CAAE,CAAC,CAAC,IAAI,CAAE,cAAc,CAAE,GAAI,CAE9C,uBAAS,MAAM,CAAC,uBAAS,CAAC,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CACpD,uCAAW,CAAC,KAAK,CAAE,IAAI,CAAE,QAAQ,CAAE,KAAK,CAAE,OAAO,CAAE,GAAG,CAAC,MAAM,CAAE,KAAK,CAAC,GAAG,CAAE,CAAE,CAC5E,8CAAkB,CAAC,YAAY,CAAE,CAAC,CAAE,KAAK,CAAE,IAAI,CAAC,MAAM,CAAE,IAAI,CAAE,OAAO,CAAE,IAAI,CAAE,cAAc,CAAE,MAAM,CAAE,eAAe,CAAE,MAAM,CAAC,WAAW,CAAE,MAAM,CAAC,UAAU,CAAE,IAAK,CAClK,gCAAkB,CAAC,eAAC,CAAC,SAAS,CAAE,IAAI,CAAC,MAAM,CAAE,IAAI,CAAC,CAAC,CAAE,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAE,GAAI,CACjG,6CAAiB,CAAC,MAAM,CAAE,IAAI,CAAE,SAAS,CAAE,IAAI,CAAE,QAAQ,CAAE,QAAQ,CAAE,KAAK,CAAE,IAAI,CAAE,GAAG,CAAE,IAAK,CAC5F,gCAAkB,CAAC,qBAAO,CAAC,KAAK,CAAE,KAAM,CACxC,qCAAS,CAAC,qCAAS,CAAC,MAAM,CAAE,OAAQ,CACpC,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,uCAAW,CAAC,OAAO,CAAE,IAAK,CACzB,iCAAK,CAAC,cAAc,CAAE,GAAI,CAE1B,sCAAU,CAAE,KAAK,CAAE,IAAI,CAAC,MAAM,CAAE,IAAK,CAErC,mCAAO,CAAC,OAAO,CAAE,CAAE,CACrB"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $generales, $$unsubscribe_generales;
  let $page, $$unsubscribe_page;
  $$unsubscribe_generales = subscribe(generales, (value) => $generales = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$9);
  $$unsubscribe_generales();
  $$unsubscribe_page();
  return `<nav class="navbar navbar-expand-lg  svelte-3x051e" data-aos="fade-down"><div class="container-fluid menu justify-content-end svelte-3x051e"><a class="navbar-brand svelte-3x051e" href="/"><img class="menu-logo svelte-3x051e"${add_attribute("src", $generales?.logos.logo_negro, 0)} alt="" width="90"></a> <button class="navbar-toggler" type="button" data-svelte-h="svelte-12f90ad"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse navbar-big justify-content-sm-center  svelte-3x051e" id="navbarNavDropdown"><ul class="navbar-nav "><li class="nav-item  svelte-3x051e" data-aos="fade-up" data-aos-delay="100"><a class="${"nav-link " + escape($page.url.pathname == "/" ? "active" : "", true) + " svelte-3x051e"}" aria-current="page" href="/#inicio">Inicio</a></li> <li class="nav-item  svelte-3x051e" data-aos="fade-up" data-aos-delay="200" data-svelte-h="svelte-1ja72wy"><a class="nav-link svelte-3x051e" href="/#quienesSomos">¿Quiénes Somos?</a></li> <li class="nav-item dropdown svelte-3x051e" data-aos="fade-up" data-aos-delay="300"><a class="${"nav-link dropdown-toggle " + escape(
    $page.url.pathname.includes("/servicios") ? "active" : "",
    true
  ) + " svelte-3x051e"}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Servicios</a> <ul class="dropdown-menu"><li><a class="dropdown-item" href="/servicios">Scouting ${``}</a></li> <li><a class="dropdown-item" href="/servicios#layout">Layout ${``}</a></li> <li><a class="dropdown-item" href="/servicios#render">Renders ${``}</a></li></ul></li> <li class="nav-item svelte-3x051e" data-aos="fade-up" data-aos-delay="400"><a class="${"nav-link " + escape(
    $page.url.pathname.includes("/proyectos") ? "active" : "",
    true
  ) + " svelte-3x051e"}" href="/proyectos">Proyectos</a></li>  <li class="nav-item svelte-3x051e" data-aos="fade-up" data-aos-delay="500"><a class="${"nav-link " + escape($page.url.pathname == "/contacto" ? "active" : "", true) + " svelte-3x051e"}" href="/contacto">Contáctanos</a></li></ul></div></div></nav> ${``}`;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lightgallery_umd = { exports: {} };
/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    /*! *****************************************************************************
    	    Copyright (c) Microsoft Corporation.
    
    	    Permission to use, copy, modify, and/or distribute this software for any
    	    purpose with or without fee is hereby granted.
    
    	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    	    PERFORMANCE OF THIS SOFTWARE.
    	    ***************************************************************************** */
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    }
    var lGEvents = {
      afterAppendSlide: "lgAfterAppendSlide",
      init: "lgInit",
      hasVideo: "lgHasVideo",
      containerResize: "lgContainerResize",
      updateSlides: "lgUpdateSlides",
      afterAppendSubHtml: "lgAfterAppendSubHtml",
      beforeOpen: "lgBeforeOpen",
      afterOpen: "lgAfterOpen",
      slideItemLoad: "lgSlideItemLoad",
      beforeSlide: "lgBeforeSlide",
      afterSlide: "lgAfterSlide",
      posterClick: "lgPosterClick",
      dragStart: "lgDragStart",
      dragMove: "lgDragMove",
      dragEnd: "lgDragEnd",
      beforeNextSlide: "lgBeforeNextSlide",
      beforePrevSlide: "lgBeforePrevSlide",
      beforeClose: "lgBeforeClose",
      afterClose: "lgAfterClose",
      rotateLeft: "lgRotateLeft",
      rotateRight: "lgRotateRight",
      flipHorizontal: "lgFlipHorizontal",
      flipVertical: "lgFlipVertical",
      autoplay: "lgAutoplay",
      autoplayStart: "lgAutoplayStart",
      autoplayStop: "lgAutoplayStop"
    };
    var lightGalleryCoreSettings = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: true,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: true,
      allowMediaOverlap: false,
      videoMaxSize: "1280-720",
      loadYouTubePoster: true,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      resetScrollPosition: true,
      hideScrollbar: false,
      closable: true,
      swipeToClose: true,
      closeOnTap: true,
      showCloseIcon: true,
      showMaximizeIcon: false,
      loop: true,
      escKey: true,
      keyPress: true,
      trapFocus: true,
      controls: true,
      slideEndAnimation: true,
      hideControlOnEnd: false,
      mousewheel: false,
      getCaptionFromTitleOrAlt: true,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: false,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: true,
      counter: true,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: true,
      enableDrag: true,
      dynamic: false,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false
      },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
        mediaLoadingFailed: "Oops... Failed to load content..."
      }
    };
    function initLgPolyfills() {
      (function() {
        if (typeof window.CustomEvent === "function")
          return false;
        function CustomEvent2(event, params) {
          params = params || {
            bubbles: false,
            cancelable: false,
            detail: null
          };
          var evt = document.createEvent("CustomEvent");
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        }
        window.CustomEvent = CustomEvent2;
      })();
      (function() {
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
      })();
    }
    var lgQuery = (
      /** @class */
      function() {
        function lgQuery2(selector) {
          this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition"
          ];
          this.selector = this._getSelector(selector);
          this.firstElement = this._getFirstEl();
          return this;
        }
        lgQuery2.generateUUID = function() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
            return v.toString(16);
          });
        };
        lgQuery2.prototype._getSelector = function(selector, context) {
          if (context === void 0) {
            context = document;
          }
          if (typeof selector !== "string") {
            return selector;
          }
          context = context || document;
          var fl = selector.substring(0, 1);
          if (fl === "#") {
            return context.querySelector(selector);
          } else {
            return context.querySelectorAll(selector);
          }
        };
        lgQuery2.prototype._each = function(func) {
          if (!this.selector) {
            return this;
          }
          if (this.selector.length !== void 0) {
            [].forEach.call(this.selector, func);
          } else {
            func(this.selector, 0);
          }
          return this;
        };
        lgQuery2.prototype._setCssVendorPrefix = function(el, cssProperty, value) {
          var property = cssProperty.replace(/-([a-z])/gi, function(s, group1) {
            return group1.toUpperCase();
          });
          if (this.cssVenderPrefixes.indexOf(property) !== -1) {
            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style["webkit" + property] = value;
            el.style["moz" + property] = value;
            el.style["ms" + property] = value;
            el.style["o" + property] = value;
          } else {
            el.style[property] = value;
          }
        };
        lgQuery2.prototype._getFirstEl = function() {
          if (this.selector && this.selector.length !== void 0) {
            return this.selector[0];
          } else {
            return this.selector;
          }
        };
        lgQuery2.prototype.isEventMatched = function(event, eventName) {
          var eventNamespace = eventName.split(".");
          return event.split(".").filter(function(e) {
            return e;
          }).every(function(e) {
            return eventNamespace.indexOf(e) !== -1;
          });
        };
        lgQuery2.prototype.attr = function(attr, value) {
          if (value === void 0) {
            if (!this.firstElement) {
              return "";
            }
            return this.firstElement.getAttribute(attr);
          }
          this._each(function(el) {
            el.setAttribute(attr, value);
          });
          return this;
        };
        lgQuery2.prototype.find = function(selector) {
          return $LG(this._getSelector(selector, this.selector));
        };
        lgQuery2.prototype.first = function() {
          if (this.selector && this.selector.length !== void 0) {
            return $LG(this.selector[0]);
          } else {
            return $LG(this.selector);
          }
        };
        lgQuery2.prototype.eq = function(index) {
          return $LG(this.selector[index]);
        };
        lgQuery2.prototype.parent = function() {
          return $LG(this.selector.parentElement);
        };
        lgQuery2.prototype.get = function() {
          return this._getFirstEl();
        };
        lgQuery2.prototype.removeAttr = function(attributes) {
          var attrs = attributes.split(" ");
          this._each(function(el) {
            attrs.forEach(function(attr) {
              return el.removeAttribute(attr);
            });
          });
          return this;
        };
        lgQuery2.prototype.wrap = function(className) {
          if (!this.firstElement) {
            return this;
          }
          var wrapper = document.createElement("div");
          wrapper.className = className;
          this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
          this.firstElement.parentNode.removeChild(this.firstElement);
          wrapper.appendChild(this.firstElement);
          return this;
        };
        lgQuery2.prototype.addClass = function(classNames) {
          if (classNames === void 0) {
            classNames = "";
          }
          this._each(function(el) {
            classNames.split(" ").forEach(function(className) {
              if (className) {
                el.classList.add(className);
              }
            });
          });
          return this;
        };
        lgQuery2.prototype.removeClass = function(classNames) {
          this._each(function(el) {
            classNames.split(" ").forEach(function(className) {
              if (className) {
                el.classList.remove(className);
              }
            });
          });
          return this;
        };
        lgQuery2.prototype.hasClass = function(className) {
          if (!this.firstElement) {
            return false;
          }
          return this.firstElement.classList.contains(className);
        };
        lgQuery2.prototype.hasAttribute = function(attribute) {
          if (!this.firstElement) {
            return false;
          }
          return this.firstElement.hasAttribute(attribute);
        };
        lgQuery2.prototype.toggleClass = function(className) {
          if (!this.firstElement) {
            return this;
          }
          if (this.hasClass(className)) {
            this.removeClass(className);
          } else {
            this.addClass(className);
          }
          return this;
        };
        lgQuery2.prototype.css = function(property, value) {
          var _this = this;
          this._each(function(el) {
            _this._setCssVendorPrefix(el, property, value);
          });
          return this;
        };
        lgQuery2.prototype.on = function(events, listener) {
          var _this = this;
          if (!this.selector) {
            return this;
          }
          events.split(" ").forEach(function(event) {
            if (!Array.isArray(lgQuery2.eventListeners[event])) {
              lgQuery2.eventListeners[event] = [];
            }
            lgQuery2.eventListeners[event].push(listener);
            _this.selector.addEventListener(event.split(".")[0], listener);
          });
          return this;
        };
        lgQuery2.prototype.once = function(event, listener) {
          var _this = this;
          this.on(event, function() {
            _this.off(event);
            listener(event);
          });
          return this;
        };
        lgQuery2.prototype.off = function(event) {
          var _this = this;
          if (!this.selector) {
            return this;
          }
          Object.keys(lgQuery2.eventListeners).forEach(function(eventName) {
            if (_this.isEventMatched(event, eventName)) {
              lgQuery2.eventListeners[eventName].forEach(function(listener) {
                _this.selector.removeEventListener(eventName.split(".")[0], listener);
              });
              lgQuery2.eventListeners[eventName] = [];
            }
          });
          return this;
        };
        lgQuery2.prototype.trigger = function(event, detail) {
          if (!this.firstElement) {
            return this;
          }
          var customEvent = new CustomEvent(event.split(".")[0], {
            detail: detail || null
          });
          this.firstElement.dispatchEvent(customEvent);
          return this;
        };
        lgQuery2.prototype.load = function(url) {
          var _this = this;
          fetch(url).then(function(res) {
            return res.text();
          }).then(function(html) {
            _this.selector.innerHTML = html;
          });
          return this;
        };
        lgQuery2.prototype.html = function(html) {
          if (html === void 0) {
            if (!this.firstElement) {
              return "";
            }
            return this.firstElement.innerHTML;
          }
          this._each(function(el) {
            el.innerHTML = html;
          });
          return this;
        };
        lgQuery2.prototype.append = function(html) {
          this._each(function(el) {
            if (typeof html === "string") {
              el.insertAdjacentHTML("beforeend", html);
            } else {
              el.appendChild(html);
            }
          });
          return this;
        };
        lgQuery2.prototype.prepend = function(html) {
          this._each(function(el) {
            el.insertAdjacentHTML("afterbegin", html);
          });
          return this;
        };
        lgQuery2.prototype.remove = function() {
          this._each(function(el) {
            el.parentNode.removeChild(el);
          });
          return this;
        };
        lgQuery2.prototype.empty = function() {
          this._each(function(el) {
            el.innerHTML = "";
          });
          return this;
        };
        lgQuery2.prototype.scrollTop = function(scrollTop) {
          if (scrollTop !== void 0) {
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            return this;
          } else {
            return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          }
        };
        lgQuery2.prototype.scrollLeft = function(scrollLeft) {
          if (scrollLeft !== void 0) {
            document.body.scrollLeft = scrollLeft;
            document.documentElement.scrollLeft = scrollLeft;
            return this;
          } else {
            return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
          }
        };
        lgQuery2.prototype.offset = function() {
          if (!this.firstElement) {
            return {
              left: 0,
              top: 0
            };
          }
          var rect = this.firstElement.getBoundingClientRect();
          var bodyMarginLeft = $LG("body").style().marginLeft;
          return {
            left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
            top: rect.top + this.scrollTop()
          };
        };
        lgQuery2.prototype.style = function() {
          if (!this.firstElement) {
            return {};
          }
          return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
        };
        lgQuery2.prototype.width = function() {
          var style = this.style();
          return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
        };
        lgQuery2.prototype.height = function() {
          var style = this.style();
          return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
        };
        lgQuery2.eventListeners = {};
        return lgQuery2;
      }()
    );
    function $LG(selector) {
      initLgPolyfills();
      return new lgQuery(selector);
    }
    var defaultDynamicOptions = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl"
    ];
    function convertToData(attr) {
      if (attr === "href") {
        return "src";
      }
      attr = attr.replace("data-", "");
      attr = attr.charAt(0).toLowerCase() + attr.slice(1);
      attr = attr.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase();
      });
      return attr;
    }
    var utils = {
      /**
       * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
       */
      getSize: function(el, container, spacing, defaultLgSize) {
        if (spacing === void 0) {
          spacing = 0;
        }
        var LGel = $LG(el);
        var lgSize = LGel.attr("data-lg-size") || defaultLgSize;
        if (!lgSize) {
          return;
        }
        var isResponsiveSizes = lgSize.split(",");
        if (isResponsiveSizes[1]) {
          var wWidth = window.innerWidth;
          for (var i = 0; i < isResponsiveSizes.length; i++) {
            var size_1 = isResponsiveSizes[i];
            var responsiveWidth = parseInt(size_1.split("-")[2], 10);
            if (responsiveWidth > wWidth) {
              lgSize = size_1;
              break;
            }
            if (i === isResponsiveSizes.length - 1) {
              lgSize = size_1;
            }
          }
        }
        var size = lgSize.split("-");
        var width = parseInt(size[0], 10);
        var height = parseInt(size[1], 10);
        var cWidth = container.width();
        var cHeight = container.height() - spacing;
        var maxWidth = Math.min(cWidth, width);
        var maxHeight = Math.min(cHeight, height);
        var ratio = Math.min(maxWidth / width, maxHeight / height);
        return { width: width * ratio, height: height * ratio };
      },
      /**
       * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
       * @param {jQuery Element}
       * @returns {String} Transform CSS string
       */
      getTransform: function(el, container, top, bottom, imageSize) {
        if (!imageSize) {
          return;
        }
        var LGel = $LG(el).find("img").first();
        if (!LGel.get()) {
          return;
        }
        var containerRect = container.get().getBoundingClientRect();
        var wWidth = containerRect.width;
        var wHeight = container.height() - (top + bottom);
        var elWidth = LGel.width();
        var elHeight = LGel.height();
        var elStyle = LGel.style();
        var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
        var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
        var scX = elWidth / imageSize.width;
        var scY = elHeight / imageSize.height;
        var transform = "translate3d(" + (x *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + scX + ", " + scY + ", 1)";
        return transform;
      },
      getIframeMarkup: function(iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
        var title = iframeTitle ? 'title="' + iframeTitle + '"' : "";
        return '<div class="lg-video-cont lg-has-iframe" style="width:' + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + '">\n                    <iframe class="lg-object" frameborder="0" ' + title + ' src="' + src + '"  allowfullscreen="true"></iframe>\n                </div>';
      },
      getImgMarkup: function(index, src, altAttr, srcset, sizes, sources) {
        var srcsetAttr = srcset ? 'srcset="' + srcset + '"' : "";
        var sizesAttr = sizes ? 'sizes="' + sizes + '"' : "";
        var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + ' class="lg-object lg-image" data-index="' + index + '" src="' + src + '" />';
        var sourceTag = "";
        if (sources) {
          var sourceObj = typeof sources === "string" ? JSON.parse(sources) : sources;
          sourceTag = sourceObj.map(function(source) {
            var attrs = "";
            Object.keys(source).forEach(function(key) {
              attrs += " " + key + '="' + source[key] + '"';
            });
            return "<source " + attrs + "></source>";
          });
        }
        return "" + sourceTag + imgMarkup;
      },
      // Get src from responsive src
      getResponsiveSrc: function(srcItms) {
        var rsWidth = [];
        var rsSrc = [];
        var src = "";
        for (var i = 0; i < srcItms.length; i++) {
          var _src = srcItms[i].split(" ");
          if (_src[0] === "") {
            _src.splice(0, 1);
          }
          rsSrc.push(_src[0]);
          rsWidth.push(_src[1]);
        }
        var wWidth = window.innerWidth;
        for (var j = 0; j < rsWidth.length; j++) {
          if (parseInt(rsWidth[j], 10) > wWidth) {
            src = rsSrc[j];
            break;
          }
        }
        return src;
      },
      isImageLoaded: function(img) {
        if (!img)
          return false;
        if (!img.complete) {
          return false;
        }
        if (img.naturalWidth === 0) {
          return false;
        }
        return true;
      },
      getVideoPosterMarkup: function(_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
        var videoClass = "";
        if (_isVideo && _isVideo.youtube) {
          videoClass = "lg-has-youtube";
        } else if (_isVideo && _isVideo.vimeo) {
          videoClass = "lg-has-vimeo";
        } else {
          videoClass = "lg-has-html5";
        }
        return '<div class="lg-video-cont ' + videoClass + '" style="' + videoContStyle + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + playVideoString + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + playVideoString + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (dummyImg || "") + '\n            <img class="lg-object lg-video-poster" src="' + _poster + '" />\n        </div>';
      },
      getFocusableElements: function(container) {
        var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
        var visibleElements = [].filter.call(elements, function(element) {
          var style = window.getComputedStyle(element);
          return style.display !== "none" && style.visibility !== "hidden";
        });
        return visibleElements;
      },
      /**
       * @desc Create dynamic elements array from gallery items when dynamic option is false
       * It helps to avoid frequent DOM interaction
       * and avoid multiple checks for dynamic elments
       *
       * @returns {Array} dynamicEl
       */
      getDynamicOptions: function(items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
        var dynamicElements = [];
        var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
        [].forEach.call(items, function(item) {
          var dynamicEl = {};
          for (var i = 0; i < item.attributes.length; i++) {
            var attr = item.attributes[i];
            if (attr.specified) {
              var dynamicAttr = convertToData(attr.name);
              var label = "";
              if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
                label = dynamicAttr;
              }
              if (label) {
                dynamicEl[label] = attr.value;
              }
            }
          }
          var currentItem = $LG(item);
          var alt = currentItem.find("img").first().attr("alt");
          var title = currentItem.attr("title");
          var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find("img").first().attr("src");
          dynamicEl.thumb = thumb;
          if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
            dynamicEl.subHtml = title || alt || "";
          }
          dynamicEl.alt = alt || title || "";
          dynamicElements.push(dynamicEl);
        });
        return dynamicElements;
      },
      isMobile: function() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      /**
       * @desc Check the given src is video
       * @param {String} src
       * @return {Object} video type
       * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
       *
       * @todo - this information can be moved to dynamicEl to avoid frequent calls
       */
      isVideo: function(src, isHTML5VIdeo, index) {
        if (!src) {
          if (isHTML5VIdeo) {
            return {
              html5: true
            };
          } else {
            console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
            return;
          }
        }
        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
        var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
        var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        if (youtube) {
          return {
            youtube
          };
        } else if (vimeo) {
          return {
            vimeo
          };
        } else if (wistia) {
          return {
            wistia
          };
        }
      }
    };
    var lgId = 0;
    var LightGallery = (
      /** @class */
      function() {
        function LightGallery2(element, options) {
          this.lgOpened = false;
          this.index = 0;
          this.plugins = [];
          this.lGalleryOn = false;
          this.lgBusy = false;
          this.currentItemsInDom = [];
          this.prevScrollTop = 0;
          this.bodyPaddingRight = 0;
          this.isDummyImageRemoved = false;
          this.dragOrSwipeEnabled = false;
          this.mediaContainerPosition = {
            top: 0,
            bottom: 0
          };
          if (!element) {
            return this;
          }
          lgId++;
          this.lgId = lgId;
          this.el = element;
          this.LGel = $LG(element);
          this.generateSettings(options);
          this.buildModules();
          if (this.settings.dynamic && this.settings.dynamicEl !== void 0 && !Array.isArray(this.settings.dynamicEl)) {
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          }
          this.galleryItems = this.getItems();
          this.normalizeSettings();
          this.init();
          this.validateLicense();
          return this;
        }
        LightGallery2.prototype.generateSettings = function(options) {
          this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
          if (this.settings.isMobile && typeof this.settings.isMobile === "function" ? this.settings.isMobile() : utils.isMobile()) {
            var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
            this.settings = __assign(__assign({}, this.settings), mobileSettings);
          }
        };
        LightGallery2.prototype.normalizeSettings = function() {
          if (this.settings.slideEndAnimation) {
            this.settings.hideControlOnEnd = false;
          }
          if (!this.settings.closable) {
            this.settings.swipeToClose = false;
          }
          this.zoomFromOrigin = this.settings.zoomFromOrigin;
          if (this.settings.dynamic) {
            this.zoomFromOrigin = false;
          }
          if (!this.settings.container) {
            this.settings.container = document.body;
          }
          this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
        };
        LightGallery2.prototype.init = function() {
          var _this = this;
          this.addSlideVideoInfo(this.galleryItems);
          this.buildStructure();
          this.LGel.trigger(lGEvents.init, {
            instance: this
          });
          if (this.settings.keyPress) {
            this.keyPress();
          }
          setTimeout(function() {
            _this.enableDrag();
            _this.enableSwipe();
            _this.triggerPosterClick();
          }, 50);
          this.arrow();
          if (this.settings.mousewheel) {
            this.mousewheel();
          }
          if (!this.settings.dynamic) {
            this.openGalleryOnItemClick();
          }
        };
        LightGallery2.prototype.openGalleryOnItemClick = function() {
          var _this = this;
          var _loop_1 = function(index2) {
            var element = this_1.items[index2];
            var $element = $LG(element);
            var uuid = lgQuery.generateUUID();
            $element.attr("data-lg-id", uuid).on("click.lgcustom-item-" + uuid, function(e) {
              e.preventDefault();
              var currentItemIndex = _this.settings.index || index2;
              _this.openGallery(currentItemIndex, element);
            });
          };
          var this_1 = this;
          for (var index = 0; index < this.items.length; index++) {
            _loop_1(index);
          }
        };
        LightGallery2.prototype.buildModules = function() {
          var _this = this;
          this.settings.plugins.forEach(function(plugin) {
            _this.plugins.push(new plugin(_this, $LG));
          });
        };
        LightGallery2.prototype.validateLicense = function() {
          if (!this.settings.licenseKey) {
            console.error("Please provide a valid license key");
          } else if (this.settings.licenseKey === "0000-0000-000-0000") {
            console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
          }
        };
        LightGallery2.prototype.getSlideItem = function(index) {
          return $LG(this.getSlideItemId(index));
        };
        LightGallery2.prototype.getSlideItemId = function(index) {
          return "#lg-item-" + this.lgId + "-" + index;
        };
        LightGallery2.prototype.getIdName = function(id) {
          return id + "-" + this.lgId;
        };
        LightGallery2.prototype.getElementById = function(id) {
          return $LG("#" + this.getIdName(id));
        };
        LightGallery2.prototype.manageSingleSlideClassName = function() {
          if (this.galleryItems.length < 2) {
            this.outer.addClass("lg-single-item");
          } else {
            this.outer.removeClass("lg-single-item");
          }
        };
        LightGallery2.prototype.buildStructure = function() {
          var _this = this;
          var container = this.$container && this.$container.get();
          if (container) {
            return;
          }
          var controls = "";
          var subHtmlCont = "";
          if (this.settings.controls) {
            controls = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings["previousSlide"] + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings["nextSlide"] + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>";
          }
          if (this.settings.appendSubHtmlTo !== ".lg-item") {
            subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
          }
          var addClasses = "";
          if (this.settings.allowMediaOverlap) {
            addClasses += "lg-media-overlap ";
          }
          var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "";
          var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "";
          var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "");
          var closeIcon = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings["closeGallery"] + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "";
          var maximizeIcon = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings["toggleMaximize"] + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "";
          var template = '\n        <div class="' + containerClassName + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + addClasses + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + controls + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === ".lg-outer" ? subHtmlCont : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (this.settings.appendSubHtmlTo === ".lg-sub-html" ? subHtmlCont : "") + "\n                </div>\n            </div>\n        </div>\n        ";
          $LG(this.settings.container).append(template);
          if (document.body !== this.settings.container) {
            $LG(this.settings.container).css("position", "relative");
          }
          this.outer = this.getElementById("lg-outer");
          this.$lgComponents = this.getElementById("lg-components");
          this.$backdrop = this.getElementById("lg-backdrop");
          this.$container = this.getElementById("lg-container");
          this.$inner = this.getElementById("lg-inner");
          this.$content = this.getElementById("lg-content");
          this.$toolbar = this.getElementById("lg-toolbar");
          this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
          var outerClassNames = this.settings.mode + " ";
          this.manageSingleSlideClassName();
          if (this.settings.enableDrag) {
            outerClassNames += "lg-grab ";
          }
          this.outer.addClass(outerClassNames);
          this.$inner.css("transition-timing-function", this.settings.easing);
          this.$inner.css("transition-duration", this.settings.speed + "ms");
          if (this.settings.download) {
            this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings["download"] + '" download class="lg-download lg-icon"></a>');
          }
          this.counter();
          $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function() {
            _this.refreshOnResize();
          });
          this.hideBars();
          this.manageCloseGallery();
          this.toggleMaximize();
          this.initModules();
        };
        LightGallery2.prototype.refreshOnResize = function() {
          if (this.lgOpened) {
            var currentGalleryItem = this.galleryItems[this.index];
            var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
            this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            if (__slideVideoInfo) {
              this.resizeVideoSlide(this.index, this.currentImageSize);
            }
            if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
              var imgStyle = this.getDummyImgStyles(this.currentImageSize);
              this.outer.find(".lg-current .lg-dummy-img").first().attr("style", imgStyle);
            }
            this.LGel.trigger(lGEvents.containerResize);
          }
        };
        LightGallery2.prototype.resizeVideoSlide = function(index, imageSize) {
          var lgVideoStyle = this.getVideoContStyle(imageSize);
          var currentSlide = this.getSlideItem(index);
          currentSlide.find(".lg-video-cont").attr("style", lgVideoStyle);
        };
        LightGallery2.prototype.updateSlides = function(items, index) {
          if (this.index > items.length - 1) {
            this.index = items.length - 1;
          }
          if (items.length === 1) {
            this.index = 0;
          }
          if (!items.length) {
            this.closeGallery();
            return;
          }
          var currentSrc = this.galleryItems[index].src;
          this.galleryItems = items;
          this.updateControls();
          this.$inner.empty();
          this.currentItemsInDom = [];
          var _index = 0;
          this.galleryItems.some(function(galleryItem, itemIndex) {
            if (galleryItem.src === currentSrc) {
              _index = itemIndex;
              return true;
            }
            return false;
          });
          this.currentItemsInDom = this.organizeSlideItems(_index, -1);
          this.loadContent(_index, true);
          this.getSlideItem(_index).addClass("lg-current");
          this.index = _index;
          this.updateCurrentCounter(_index);
          this.LGel.trigger(lGEvents.updateSlides);
        };
        LightGallery2.prototype.getItems = function() {
          this.items = [];
          if (!this.settings.dynamic) {
            if (this.settings.selector === "this") {
              this.items.push(this.el);
            } else if (this.settings.selector) {
              if (typeof this.settings.selector === "string") {
                if (this.settings.selectWithin) {
                  var selectWithin = $LG(this.settings.selectWithin);
                  this.items = selectWithin.find(this.settings.selector).get();
                } else {
                  this.items = this.el.querySelectorAll(this.settings.selector);
                }
              } else {
                this.items = this.settings.selector;
              }
            } else {
              this.items = this.el.children;
            }
            return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
          } else {
            return this.settings.dynamicEl || [];
          }
        };
        LightGallery2.prototype.shouldHideScrollbar = function() {
          return this.settings.hideScrollbar && document.body === this.settings.container;
        };
        LightGallery2.prototype.hideScrollbar = function() {
          if (!this.shouldHideScrollbar()) {
            return;
          }
          this.bodyPaddingRight = parseFloat($LG("body").style().paddingRight);
          var bodyRect = document.documentElement.getBoundingClientRect();
          var scrollbarWidth = window.innerWidth - bodyRect.width;
          $LG(document.body).css("padding-right", scrollbarWidth + this.bodyPaddingRight + "px");
          $LG(document.body).addClass("lg-overlay-open");
        };
        LightGallery2.prototype.resetScrollBar = function() {
          if (!this.shouldHideScrollbar()) {
            return;
          }
          $LG(document.body).css("padding-right", this.bodyPaddingRight + "px");
          $LG(document.body).removeClass("lg-overlay-open");
        };
        LightGallery2.prototype.openGallery = function(index, element) {
          var _this = this;
          if (index === void 0) {
            index = this.settings.index;
          }
          if (this.lgOpened)
            return;
          this.lgOpened = true;
          this.outer.removeClass("lg-hide-items");
          this.hideScrollbar();
          this.$container.addClass("lg-show");
          var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
          this.currentItemsInDom = itemsToBeInsertedToDom;
          var items = "";
          itemsToBeInsertedToDom.forEach(function(item) {
            items = items + ('<div id="' + item + '" class="lg-item"></div>');
          });
          this.$inner.append(items);
          this.addHtml(index);
          var transform = "";
          this.mediaContainerPosition = this.getMediaContainerPosition();
          var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
          if (!this.settings.allowMediaOverlap) {
            this.setMediaContainerPosition(top, bottom);
          }
          var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
          if (this.zoomFromOrigin && element) {
            this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
          }
          if (!this.zoomFromOrigin || !transform) {
            this.outer.addClass(this.settings.startClass);
            this.getSlideItem(index).removeClass("lg-complete");
          }
          var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
          setTimeout(function() {
            _this.outer.addClass("lg-components-open");
          }, timeout);
          this.index = index;
          this.LGel.trigger(lGEvents.beforeOpen);
          this.getSlideItem(index).addClass("lg-current");
          this.lGalleryOn = false;
          this.prevScrollTop = $LG(window).scrollTop();
          setTimeout(function() {
            if (_this.zoomFromOrigin && transform) {
              var currentSlide_1 = _this.getSlideItem(index);
              currentSlide_1.css("transform", transform);
              setTimeout(function() {
                currentSlide_1.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", _this.settings.startAnimationDuration + "ms");
                _this.outer.addClass("lg-zoom-from-image");
              });
              setTimeout(function() {
                currentSlide_1.css("transform", "translate3d(0, 0, 0)");
              }, 100);
            }
            setTimeout(function() {
              _this.$backdrop.addClass("in");
              _this.$container.addClass("lg-show-in");
            }, 10);
            setTimeout(function() {
              if (_this.settings.trapFocus && document.body === _this.settings.container) {
                _this.trapFocus();
              }
            }, _this.settings.backdropDuration + 50);
            if (!_this.zoomFromOrigin || !transform) {
              setTimeout(function() {
                _this.outer.addClass("lg-visible");
              }, _this.settings.backdropDuration);
            }
            _this.slide(index, false, false, false);
            _this.LGel.trigger(lGEvents.afterOpen);
          });
          if (document.body === this.settings.container) {
            $LG("html").addClass("lg-on");
          }
        };
        LightGallery2.prototype.getMediaContainerPosition = function() {
          if (this.settings.allowMediaOverlap) {
            return {
              top: 0,
              bottom: 0
            };
          }
          var top = this.$toolbar.get().clientHeight || 0;
          var subHtml = this.outer.find(".lg-components .lg-sub-html").get();
          var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
          var thumbContainer = this.outer.find(".lg-thumb-outer").get();
          var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
          var bottom = thumbHeight + captionHeight;
          return {
            top,
            bottom
          };
        };
        LightGallery2.prototype.setMediaContainerPosition = function(top, bottom) {
          if (top === void 0) {
            top = 0;
          }
          if (bottom === void 0) {
            bottom = 0;
          }
          this.$content.css("top", top + "px").css("bottom", bottom + "px");
        };
        LightGallery2.prototype.hideBars = function() {
          var _this = this;
          setTimeout(function() {
            _this.outer.removeClass("lg-hide-items");
            if (_this.settings.hideBarsDelay > 0) {
              _this.outer.on("mousemove.lg click.lg touchstart.lg", function() {
                _this.outer.removeClass("lg-hide-items");
                clearTimeout(_this.hideBarTimeout);
                _this.hideBarTimeout = setTimeout(function() {
                  _this.outer.addClass("lg-hide-items");
                }, _this.settings.hideBarsDelay);
              });
              _this.outer.trigger("mousemove.lg");
            }
          }, this.settings.showBarsAfter);
        };
        LightGallery2.prototype.initPictureFill = function($img) {
          if (this.settings.supportLegacyBrowser) {
            try {
              picturefill({
                elements: [$img.get()]
              });
            } catch (e) {
              console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.");
            }
          }
        };
        LightGallery2.prototype.counter = function() {
          if (this.settings.counter) {
            var counterHtml = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(counterHtml);
          }
        };
        LightGallery2.prototype.addHtml = function(index) {
          var subHtml;
          var subHtmlUrl;
          if (this.galleryItems[index].subHtmlUrl) {
            subHtmlUrl = this.galleryItems[index].subHtmlUrl;
          } else {
            subHtml = this.galleryItems[index].subHtml;
          }
          if (!subHtmlUrl) {
            if (subHtml) {
              var fL = subHtml.substring(0, 1);
              if (fL === "." || fL === "#") {
                if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) {
                  subHtml = $LG(this.items).eq(index).find(subHtml).first().html();
                } else {
                  subHtml = $LG(subHtml).first().html();
                }
              }
            } else {
              subHtml = "";
            }
          }
          if (this.settings.appendSubHtmlTo !== ".lg-item") {
            if (subHtmlUrl) {
              this.outer.find(".lg-sub-html").load(subHtmlUrl);
            } else {
              this.outer.find(".lg-sub-html").html(subHtml);
            }
          } else {
            var currentSlide = $LG(this.getSlideItemId(index));
            if (subHtmlUrl) {
              currentSlide.load(subHtmlUrl);
            } else {
              currentSlide.append('<div class="lg-sub-html">' + subHtml + "</div>");
            }
          }
          if (typeof subHtml !== "undefined" && subHtml !== null) {
            if (subHtml === "") {
              this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html");
            } else {
              this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html");
            }
          }
          this.LGel.trigger(lGEvents.afterAppendSubHtml, {
            index
          });
        };
        LightGallery2.prototype.preload = function(index) {
          for (var i = 1; i <= this.settings.preload; i++) {
            if (i >= this.galleryItems.length - index) {
              break;
            }
            this.loadContent(index + i, false);
          }
          for (var j = 1; j <= this.settings.preload; j++) {
            if (index - j < 0) {
              break;
            }
            this.loadContent(index - j, false);
          }
        };
        LightGallery2.prototype.getDummyImgStyles = function(imageSize) {
          if (!imageSize)
            return "";
          return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
        };
        LightGallery2.prototype.getVideoContStyle = function(imageSize) {
          if (!imageSize)
            return "";
          return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
        };
        LightGallery2.prototype.getDummyImageContent = function($currentSlide, index, alt) {
          var $currentItem;
          if (!this.settings.dynamic) {
            $currentItem = $LG(this.items).eq(index);
          }
          if ($currentItem) {
            var _dummyImgSrc = void 0;
            if (!this.settings.exThumbImage) {
              _dummyImgSrc = $currentItem.find("img").first().attr("src");
            } else {
              _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
            }
            if (!_dummyImgSrc)
              return "";
            var imgStyle = this.getDummyImgStyles(this.currentImageSize);
            var dummyImgContent = "<img " + alt + ' style="' + imgStyle + '" class="lg-dummy-img" src="' + _dummyImgSrc + '" />';
            $currentSlide.addClass("lg-first-slide");
            this.outer.addClass("lg-first-slide-loading");
            return dummyImgContent;
          }
          return "";
        };
        LightGallery2.prototype.setImgMarkup = function(src, $currentSlide, index) {
          var currentGalleryItem = this.galleryItems[index];
          var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
          var imgContent = "";
          var altAttr = alt ? 'alt="' + alt + '"' : "";
          if (this.isFirstSlideWithZoomAnimation()) {
            imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
          } else {
            imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
          }
          var imgMarkup = '<picture class="lg-img-wrap"> ' + imgContent + "</picture>";
          $currentSlide.prepend(imgMarkup);
        };
        LightGallery2.prototype.onSlideObjectLoad = function($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
          var mediaObject = $slide.find(".lg-object").first();
          if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) {
            onLoad();
          } else {
            mediaObject.on("load.lg error.lg", function() {
              onLoad && onLoad();
            });
            mediaObject.on("error.lg", function() {
              onError && onError();
            });
          }
        };
        LightGallery2.prototype.onLgObjectLoad = function(currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
          var _this = this;
          this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function() {
            _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
          }, function() {
            currentSlide.addClass("lg-complete lg-complete_");
            currentSlide.html('<span class="lg-error-msg">' + _this.settings.strings["mediaLoadingFailed"] + "</span>");
          });
        };
        LightGallery2.prototype.triggerSlideItemLoad = function($currentSlide, index, delay, speed, isFirstSlide) {
          var _this = this;
          var currentGalleryItem = this.galleryItems[index];
          var _speed = isFirstSlide && this.getSlideType(currentGalleryItem) === "video" && !currentGalleryItem.poster ? speed : 0;
          setTimeout(function() {
            $currentSlide.addClass("lg-complete lg-complete_");
            _this.LGel.trigger(lGEvents.slideItemLoad, {
              index,
              delay: delay || 0,
              isFirstSlide
            });
          }, _speed);
        };
        LightGallery2.prototype.isFirstSlideWithZoomAnimation = function() {
          return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
        };
        LightGallery2.prototype.addSlideVideoInfo = function(items) {
          var _this = this;
          items.forEach(function(element, index) {
            element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
            if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) {
              element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
            }
          });
        };
        LightGallery2.prototype.loadContent = function(index, rec) {
          var _this = this;
          var currentGalleryItem = this.galleryItems[index];
          var $currentSlide = $LG(this.getSlideItemId(index));
          var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
          var src = currentGalleryItem.src;
          var video = currentGalleryItem.video;
          var _html5Video = video && typeof video === "string" ? JSON.parse(video) : video;
          if (currentGalleryItem.responsive) {
            var srcDyItms = currentGalleryItem.responsive.split(",");
            src = utils.getResponsiveSrc(srcDyItms) || src;
          }
          var videoInfo = currentGalleryItem.__slideVideoInfo;
          var lgVideoStyle = "";
          var iframe = !!currentGalleryItem.iframe;
          var isFirstSlide = !this.lGalleryOn;
          var delay = 0;
          if (isFirstSlide) {
            if (this.zoomFromOrigin && this.currentImageSize) {
              delay = this.settings.startAnimationDuration + 10;
            } else {
              delay = this.settings.backdropDuration + 10;
            }
          }
          if (!$currentSlide.hasClass("lg-loaded")) {
            if (videoInfo) {
              var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
              var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
              lgVideoStyle = this.getVideoContStyle(videoSize);
            }
            if (iframe) {
              var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
              $currentSlide.prepend(markup);
            } else if (poster) {
              var dummyImg = "";
              var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
              if (hasStartAnimation) {
                dummyImg = this.getDummyImageContent($currentSlide, index, "");
              }
              var markup = utils.getVideoPosterMarkup(poster, dummyImg || "", lgVideoStyle, this.settings.strings["playVideo"], videoInfo);
              $currentSlide.prepend(markup);
            } else if (videoInfo) {
              var markup = '<div class="lg-video-cont " style="' + lgVideoStyle + '"></div>';
              $currentSlide.prepend(markup);
            } else {
              this.setImgMarkup(src, $currentSlide, index);
              if (srcset || sources) {
                var $img = $currentSlide.find(".lg-object");
                this.initPictureFill($img);
              }
            }
            if (poster || videoInfo) {
              this.LGel.trigger(lGEvents.hasVideo, {
                index,
                src,
                html5Video: _html5Video,
                hasPoster: !!poster
              });
            }
            this.LGel.trigger(lGEvents.afterAppendSlide, { index });
            if (this.lGalleryOn && this.settings.appendSubHtmlTo === ".lg-item") {
              this.addHtml(index);
            }
          }
          var _speed = 0;
          if (delay && !$LG(document.body).hasClass("lg-from-hash")) {
            _speed = delay;
          }
          if (this.isFirstSlideWithZoomAnimation()) {
            setTimeout(function() {
              $currentSlide.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style");
            }, this.settings.startAnimationDuration + 100);
            if (!$currentSlide.hasClass("lg-loaded")) {
              setTimeout(function() {
                if (_this.getSlideType(currentGalleryItem) === "image") {
                  var alt = currentGalleryItem.alt;
                  var altAttr = alt ? 'alt="' + alt + '"' : "";
                  $currentSlide.find(".lg-img-wrap").append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                  if (srcset || sources) {
                    var $img2 = $currentSlide.find(".lg-object");
                    _this.initPictureFill($img2);
                  }
                }
                if (_this.getSlideType(currentGalleryItem) === "image" || _this.getSlideType(currentGalleryItem) === "video" && poster) {
                  _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                  _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function() {
                    _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                  }, function() {
                    _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                  });
                }
              }, this.settings.startAnimationDuration + 100);
            }
          }
          $currentSlide.addClass("lg-loaded");
          if (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(currentGalleryItem) === "video" && !poster) {
            this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
          }
          if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass("lg-complete_") && !this.lGalleryOn) {
            setTimeout(function() {
              $currentSlide.addClass("lg-complete");
            }, this.settings.backdropDuration);
          }
          this.lGalleryOn = true;
          if (rec === true) {
            if (!$currentSlide.hasClass("lg-complete_")) {
              $currentSlide.find(".lg-object").first().on("load.lg error.lg", function() {
                _this.preload(index);
              });
            } else {
              this.preload(index);
            }
          }
        };
        LightGallery2.prototype.loadContentOnFirstSlideLoad = function(index, $currentSlide, speed) {
          var _this = this;
          setTimeout(function() {
            $currentSlide.find(".lg-dummy-img").remove();
            $currentSlide.removeClass("lg-first-slide");
            _this.outer.removeClass("lg-first-slide-loading");
            _this.isDummyImageRemoved = true;
            _this.preload(index);
          }, speed + 300);
        };
        LightGallery2.prototype.getItemsToBeInsertedToDom = function(index, prevIndex, numberOfItems) {
          var _this = this;
          if (numberOfItems === void 0) {
            numberOfItems = 0;
          }
          var itemsToBeInsertedToDom = [];
          var possibleNumberOfItems = Math.max(numberOfItems, 3);
          possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
          var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
          if (this.galleryItems.length <= 3) {
            this.galleryItems.forEach(function(_element, index2) {
              itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index2);
            });
            return itemsToBeInsertedToDom;
          }
          if (index < (this.galleryItems.length - 1) / 2) {
            for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
              itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
              itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
            }
          } else {
            for (var idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) {
              itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
              itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
            }
          }
          if (this.settings.loop) {
            if (index === this.galleryItems.length - 1) {
              itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-0");
            } else if (index === 0) {
              itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
            }
          }
          if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
          }
          return itemsToBeInsertedToDom;
        };
        LightGallery2.prototype.organizeSlideItems = function(index, prevIndex) {
          var _this = this;
          var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
          itemsToBeInsertedToDom.forEach(function(item) {
            if (_this.currentItemsInDom.indexOf(item) === -1) {
              _this.$inner.append('<div id="' + item + '" class="lg-item"></div>');
            }
          });
          this.currentItemsInDom.forEach(function(item) {
            if (itemsToBeInsertedToDom.indexOf(item) === -1) {
              $LG("#" + item).remove();
            }
          });
          return itemsToBeInsertedToDom;
        };
        LightGallery2.prototype.getPreviousSlideIndex = function() {
          var prevIndex = 0;
          try {
            var currentItemId = this.outer.find(".lg-current").first().attr("id");
            prevIndex = parseInt(currentItemId.split("-")[3]) || 0;
          } catch (error) {
            prevIndex = 0;
          }
          return prevIndex;
        };
        LightGallery2.prototype.setDownloadValue = function(index) {
          if (this.settings.download) {
            var currentGalleryItem = this.galleryItems[index];
            var hideDownloadBtn = currentGalleryItem.downloadUrl === false || currentGalleryItem.downloadUrl === "false";
            if (hideDownloadBtn) {
              this.outer.addClass("lg-hide-download");
            } else {
              var $download = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download");
              $download.attr("href", currentGalleryItem.downloadUrl || currentGalleryItem.src);
              if (currentGalleryItem.download) {
                $download.attr("download", currentGalleryItem.download);
              }
            }
          }
        };
        LightGallery2.prototype.makeSlideAnimation = function(direction, currentSlideItem, previousSlideItem) {
          var _this = this;
          if (this.lGalleryOn) {
            previousSlideItem.addClass("lg-slide-progress");
          }
          setTimeout(function() {
            _this.outer.addClass("lg-no-trans");
            _this.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide");
            if (direction === "prev") {
              currentSlideItem.addClass("lg-prev-slide");
              previousSlideItem.addClass("lg-next-slide");
            } else {
              currentSlideItem.addClass("lg-next-slide");
              previousSlideItem.addClass("lg-prev-slide");
            }
            setTimeout(function() {
              _this.outer.find(".lg-item").removeClass("lg-current");
              currentSlideItem.addClass("lg-current");
              _this.outer.removeClass("lg-no-trans");
            }, 50);
          }, this.lGalleryOn ? this.settings.slideDelay : 0);
        };
        LightGallery2.prototype.slide = function(index, fromTouch, fromThumb, direction) {
          var _this = this;
          var prevIndex = this.getPreviousSlideIndex();
          this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
          if (this.lGalleryOn && prevIndex === index) {
            return;
          }
          var numberOfGalleryItems = this.galleryItems.length;
          if (!this.lgBusy) {
            if (this.settings.counter) {
              this.updateCurrentCounter(index);
            }
            var currentSlideItem = this.getSlideItem(index);
            var previousSlideItem_1 = this.getSlideItem(prevIndex);
            var currentGalleryItem = this.galleryItems[index];
            var videoInfo = currentGalleryItem.__slideVideoInfo;
            this.outer.attr("data-lg-slide-type", this.getSlideType(currentGalleryItem));
            this.setDownloadValue(index);
            if (videoInfo) {
              var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
              var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
              this.resizeVideoSlide(index, videoSize);
            }
            this.LGel.trigger(lGEvents.beforeSlide, {
              prevIndex,
              index,
              fromTouch: !!fromTouch,
              fromThumb: !!fromThumb
            });
            this.lgBusy = true;
            clearTimeout(this.hideBarTimeout);
            this.arrowDisable(index);
            if (!direction) {
              if (index < prevIndex) {
                direction = "prev";
              } else if (index > prevIndex) {
                direction = "next";
              }
            }
            if (!fromTouch) {
              this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
            } else {
              this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
              var touchPrev = void 0;
              var touchNext = void 0;
              if (numberOfGalleryItems > 2) {
                touchPrev = index - 1;
                touchNext = index + 1;
                if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                  touchNext = 0;
                  touchPrev = numberOfGalleryItems - 1;
                } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
                  touchNext = 0;
                  touchPrev = numberOfGalleryItems - 1;
                }
              } else {
                touchPrev = 0;
                touchNext = 1;
              }
              if (direction === "prev") {
                this.getSlideItem(touchNext).addClass("lg-next-slide");
              } else {
                this.getSlideItem(touchPrev).addClass("lg-prev-slide");
              }
              currentSlideItem.addClass("lg-current");
            }
            if (!this.lGalleryOn) {
              this.loadContent(index, true);
            } else {
              setTimeout(function() {
                _this.loadContent(index, true);
                if (_this.settings.appendSubHtmlTo !== ".lg-item") {
                  _this.addHtml(index);
                }
              }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
            }
            setTimeout(function() {
              _this.lgBusy = false;
              previousSlideItem_1.removeClass("lg-slide-progress");
              _this.LGel.trigger(lGEvents.afterSlide, {
                prevIndex,
                index,
                fromTouch,
                fromThumb
              });
            }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
          }
          this.index = index;
        };
        LightGallery2.prototype.updateCurrentCounter = function(index) {
          this.getElementById("lg-counter-current").html(index + 1 + "");
        };
        LightGallery2.prototype.updateCounterTotal = function() {
          this.getElementById("lg-counter-all").html(this.galleryItems.length + "");
        };
        LightGallery2.prototype.getSlideType = function(item) {
          if (item.__slideVideoInfo) {
            return "video";
          } else if (item.iframe) {
            return "iframe";
          } else {
            return "image";
          }
        };
        LightGallery2.prototype.touchMove = function(startCoords, endCoords, e) {
          var distanceX = endCoords.pageX - startCoords.pageX;
          var distanceY = endCoords.pageY - startCoords.pageY;
          var allowSwipe = false;
          if (this.swipeDirection) {
            allowSwipe = true;
          } else {
            if (Math.abs(distanceX) > 15) {
              this.swipeDirection = "horizontal";
              allowSwipe = true;
            } else if (Math.abs(distanceY) > 15) {
              this.swipeDirection = "vertical";
              allowSwipe = true;
            }
          }
          if (!allowSwipe) {
            return;
          }
          var $currentSlide = this.getSlideItem(this.index);
          if (this.swipeDirection === "horizontal") {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            this.outer.addClass("lg-dragging");
            this.setTranslate($currentSlide, distanceX, 0);
            var width = $currentSlide.get().offsetWidth;
            var slideWidthAmount = width * 15 / 100;
            var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
            this.setTranslate(this.outer.find(".lg-prev-slide").first(), -width + distanceX - gutter, 0);
            this.setTranslate(this.outer.find(".lg-next-slide").first(), width + distanceX + gutter, 0);
          } else if (this.swipeDirection === "vertical") {
            if (this.settings.swipeToClose) {
              e === null || e === void 0 ? void 0 : e.preventDefault();
              this.$container.addClass("lg-dragging-vertical");
              var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
              this.$backdrop.css("opacity", opacity);
              var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
              this.setTranslate($currentSlide, 0, distanceY, scale, scale);
              if (Math.abs(distanceY) > 100) {
                this.outer.addClass("lg-hide-items").removeClass("lg-components-open");
              }
            }
          }
        };
        LightGallery2.prototype.touchEnd = function(endCoords, startCoords, event) {
          var _this = this;
          var distance;
          if (this.settings.mode !== "lg-slide") {
            this.outer.addClass("lg-slide");
          }
          setTimeout(function() {
            _this.$container.removeClass("lg-dragging-vertical");
            _this.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
            var triggerClick = true;
            if (_this.swipeDirection === "horizontal") {
              distance = endCoords.pageX - startCoords.pageX;
              var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
              if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                _this.goToNextSlide(true);
                triggerClick = false;
              } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                _this.goToPrevSlide(true);
                triggerClick = false;
              }
            } else if (_this.swipeDirection === "vertical") {
              distance = Math.abs(endCoords.pageY - startCoords.pageY);
              if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                _this.closeGallery();
                return;
              } else {
                _this.$backdrop.css("opacity", 1);
              }
            }
            _this.outer.find(".lg-item").removeAttr("style");
            if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
              var target = $LG(event.target);
              if (_this.isPosterElement(target)) {
                _this.LGel.trigger(lGEvents.posterClick);
              }
            }
            _this.swipeDirection = void 0;
          });
          setTimeout(function() {
            if (!_this.outer.hasClass("lg-dragging") && _this.settings.mode !== "lg-slide") {
              _this.outer.removeClass("lg-slide");
            }
          }, this.settings.speed + 100);
        };
        LightGallery2.prototype.enableSwipe = function() {
          var _this = this;
          var startCoords = {};
          var endCoords = {};
          var isMoved = false;
          var isSwiping = false;
          if (this.settings.enableSwipe) {
            this.$inner.on("touchstart.lg", function(e) {
              _this.dragOrSwipeEnabled = true;
              var $item = _this.getSlideItem(_this.index);
              if (($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && !_this.outer.hasClass("lg-zoomed") && !_this.lgBusy && e.touches.length === 1) {
                isSwiping = true;
                _this.touchAction = "swipe";
                _this.manageSwipeClass();
                startCoords = {
                  pageX: e.touches[0].pageX,
                  pageY: e.touches[0].pageY
                };
              }
            });
            this.$inner.on("touchmove.lg", function(e) {
              if (isSwiping && _this.touchAction === "swipe" && e.touches.length === 1) {
                endCoords = {
                  pageX: e.touches[0].pageX,
                  pageY: e.touches[0].pageY
                };
                _this.touchMove(startCoords, endCoords, e);
                isMoved = true;
              }
            });
            this.$inner.on("touchend.lg", function(event) {
              if (_this.touchAction === "swipe") {
                if (isMoved) {
                  isMoved = false;
                  _this.touchEnd(endCoords, startCoords, event);
                } else if (isSwiping) {
                  var target = $LG(event.target);
                  if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                  }
                }
                _this.touchAction = void 0;
                isSwiping = false;
              }
            });
          }
        };
        LightGallery2.prototype.enableDrag = function() {
          var _this = this;
          var startCoords = {};
          var endCoords = {};
          var isDraging = false;
          var isMoved = false;
          if (this.settings.enableDrag) {
            this.outer.on("mousedown.lg", function(e) {
              _this.dragOrSwipeEnabled = true;
              var $item = _this.getSlideItem(_this.index);
              if ($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) {
                if (!_this.outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                  e.preventDefault();
                  if (!_this.lgBusy) {
                    _this.manageSwipeClass();
                    startCoords = {
                      pageX: e.pageX,
                      pageY: e.pageY
                    };
                    isDraging = true;
                    _this.outer.get().scrollLeft += 1;
                    _this.outer.get().scrollLeft -= 1;
                    _this.outer.removeClass("lg-grab").addClass("lg-grabbing");
                    _this.LGel.trigger(lGEvents.dragStart);
                  }
                }
              }
            });
            $LG(window).on("mousemove.lg.global" + this.lgId, function(e) {
              if (isDraging && _this.lgOpened) {
                isMoved = true;
                endCoords = {
                  pageX: e.pageX,
                  pageY: e.pageY
                };
                _this.touchMove(startCoords, endCoords);
                _this.LGel.trigger(lGEvents.dragMove);
              }
            });
            $LG(window).on("mouseup.lg.global" + this.lgId, function(event) {
              if (!_this.lgOpened) {
                return;
              }
              var target = $LG(event.target);
              if (isMoved) {
                isMoved = false;
                _this.touchEnd(endCoords, startCoords, event);
                _this.LGel.trigger(lGEvents.dragEnd);
              } else if (_this.isPosterElement(target)) {
                _this.LGel.trigger(lGEvents.posterClick);
              }
              if (isDraging) {
                isDraging = false;
                _this.outer.removeClass("lg-grabbing").addClass("lg-grab");
              }
            });
          }
        };
        LightGallery2.prototype.triggerPosterClick = function() {
          var _this = this;
          this.$inner.on("click.lg", function(event) {
            if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) {
              _this.LGel.trigger(lGEvents.posterClick);
            }
          });
        };
        LightGallery2.prototype.manageSwipeClass = function() {
          var _touchNext = this.index + 1;
          var _touchPrev = this.index - 1;
          if (this.settings.loop && this.galleryItems.length > 2) {
            if (this.index === 0) {
              _touchPrev = this.galleryItems.length - 1;
            } else if (this.index === this.galleryItems.length - 1) {
              _touchNext = 0;
            }
          }
          this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide");
          if (_touchPrev > -1) {
            this.getSlideItem(_touchPrev).addClass("lg-prev-slide");
          }
          this.getSlideItem(_touchNext).addClass("lg-next-slide");
        };
        LightGallery2.prototype.goToNextSlide = function(fromTouch) {
          var _this = this;
          var _loop = this.settings.loop;
          if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
          }
          if (!this.lgBusy) {
            if (this.index + 1 < this.galleryItems.length) {
              this.index++;
              this.LGel.trigger(lGEvents.beforeNextSlide, {
                index: this.index
              });
              this.slide(this.index, !!fromTouch, false, "next");
            } else {
              if (_loop) {
                this.index = 0;
                this.LGel.trigger(lGEvents.beforeNextSlide, {
                  index: this.index
                });
                this.slide(this.index, !!fromTouch, false, "next");
              } else if (this.settings.slideEndAnimation && !fromTouch) {
                this.outer.addClass("lg-right-end");
                setTimeout(function() {
                  _this.outer.removeClass("lg-right-end");
                }, 400);
              }
            }
          }
        };
        LightGallery2.prototype.goToPrevSlide = function(fromTouch) {
          var _this = this;
          var _loop = this.settings.loop;
          if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
          }
          if (!this.lgBusy) {
            if (this.index > 0) {
              this.index--;
              this.LGel.trigger(lGEvents.beforePrevSlide, {
                index: this.index,
                fromTouch
              });
              this.slide(this.index, !!fromTouch, false, "prev");
            } else {
              if (_loop) {
                this.index = this.galleryItems.length - 1;
                this.LGel.trigger(lGEvents.beforePrevSlide, {
                  index: this.index,
                  fromTouch
                });
                this.slide(this.index, !!fromTouch, false, "prev");
              } else if (this.settings.slideEndAnimation && !fromTouch) {
                this.outer.addClass("lg-left-end");
                setTimeout(function() {
                  _this.outer.removeClass("lg-left-end");
                }, 400);
              }
            }
          }
        };
        LightGallery2.prototype.keyPress = function() {
          var _this = this;
          $LG(window).on("keydown.lg.global" + this.lgId, function(e) {
            if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
              e.preventDefault();
              if (_this.settings.allowMediaOverlap && _this.outer.hasClass("lg-can-toggle") && _this.outer.hasClass("lg-components-open")) {
                _this.outer.removeClass("lg-components-open");
              } else {
                _this.closeGallery();
              }
            }
            if (_this.lgOpened && _this.galleryItems.length > 1) {
              if (e.keyCode === 37) {
                e.preventDefault();
                _this.goToPrevSlide();
              }
              if (e.keyCode === 39) {
                e.preventDefault();
                _this.goToNextSlide();
              }
            }
          });
        };
        LightGallery2.prototype.arrow = function() {
          var _this = this;
          this.getElementById("lg-prev").on("click.lg", function() {
            _this.goToPrevSlide();
          });
          this.getElementById("lg-next").on("click.lg", function() {
            _this.goToNextSlide();
          });
        };
        LightGallery2.prototype.arrowDisable = function(index) {
          if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var $prev = this.getElementById("lg-prev");
            var $next = this.getElementById("lg-next");
            if (index + 1 === this.galleryItems.length) {
              $next.attr("disabled", "disabled").addClass("disabled");
            } else {
              $next.removeAttr("disabled").removeClass("disabled");
            }
            if (index === 0) {
              $prev.attr("disabled", "disabled").addClass("disabled");
            } else {
              $prev.removeAttr("disabled").removeClass("disabled");
            }
          }
        };
        LightGallery2.prototype.setTranslate = function($el, xValue, yValue, scaleX, scaleY) {
          if (scaleX === void 0) {
            scaleX = 1;
          }
          if (scaleY === void 0) {
            scaleY = 1;
          }
          $el.css("transform", "translate3d(" + xValue + "px, " + yValue + "px, 0px) scale3d(" + scaleX + ", " + scaleY + ", 1)");
        };
        LightGallery2.prototype.mousewheel = function() {
          var _this = this;
          var lastCall = 0;
          this.outer.on("wheel.lg", function(e) {
            if (!e.deltaY || _this.galleryItems.length < 2) {
              return;
            }
            e.preventDefault();
            var now = (/* @__PURE__ */ new Date()).getTime();
            if (now - lastCall < 1e3) {
              return;
            }
            lastCall = now;
            if (e.deltaY > 0) {
              _this.goToNextSlide();
            } else if (e.deltaY < 0) {
              _this.goToPrevSlide();
            }
          });
        };
        LightGallery2.prototype.isSlideElement = function(target) {
          return target.hasClass("lg-outer") || target.hasClass("lg-item") || target.hasClass("lg-img-wrap");
        };
        LightGallery2.prototype.isPosterElement = function(target) {
          var playButton = this.getSlideItem(this.index).find(".lg-video-play-button").get();
          return target.hasClass("lg-video-poster") || target.hasClass("lg-video-play-button") || playButton && playButton.contains(target.get());
        };
        LightGallery2.prototype.toggleMaximize = function() {
          var _this = this;
          this.getElementById("lg-maximize").on("click.lg", function() {
            _this.$container.toggleClass("lg-inline");
            _this.refreshOnResize();
          });
        };
        LightGallery2.prototype.invalidateItems = function() {
          for (var index = 0; index < this.items.length; index++) {
            var element = this.items[index];
            var $element = $LG(element);
            $element.off("click.lgcustom-item-" + $element.attr("data-lg-id"));
          }
        };
        LightGallery2.prototype.trapFocus = function() {
          var _this = this;
          this.$container.get().focus({
            preventScroll: true
          });
          $LG(window).on("keydown.lg.global" + this.lgId, function(e) {
            if (!_this.lgOpened) {
              return;
            }
            var isTabPressed = e.key === "Tab" || e.keyCode === 9;
            if (!isTabPressed) {
              return;
            }
            var focusableEls = utils.getFocusableElements(_this.$container.get());
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
              }
            }
          });
        };
        LightGallery2.prototype.manageCloseGallery = function() {
          var _this = this;
          if (!this.settings.closable)
            return;
          var mousedown = false;
          this.getElementById("lg-close").on("click.lg", function() {
            _this.closeGallery();
          });
          if (this.settings.closeOnTap) {
            this.outer.on("mousedown.lg", function(e) {
              var target = $LG(e.target);
              if (_this.isSlideElement(target)) {
                mousedown = true;
              } else {
                mousedown = false;
              }
            });
            this.outer.on("mousemove.lg", function() {
              mousedown = false;
            });
            this.outer.on("mouseup.lg", function(e) {
              var target = $LG(e.target);
              if (_this.isSlideElement(target) && mousedown) {
                if (!_this.outer.hasClass("lg-dragging")) {
                  _this.closeGallery();
                }
              }
            });
          }
        };
        LightGallery2.prototype.closeGallery = function(force) {
          var _this = this;
          if (!this.lgOpened || !this.settings.closable && !force) {
            return 0;
          }
          this.LGel.trigger(lGEvents.beforeClose);
          if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) {
            $LG(window).scrollTop(this.prevScrollTop);
          }
          var currentItem = this.items[this.index];
          var transform;
          if (this.zoomFromOrigin && currentItem) {
            var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
            var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
            var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
            transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
          }
          if (this.zoomFromOrigin && transform) {
            this.outer.addClass("lg-closing lg-zoom-from-image");
            this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", transform);
          } else {
            this.outer.addClass("lg-hide-items");
            this.outer.removeClass("lg-zoom-from-image");
          }
          this.destroyModules();
          this.lGalleryOn = false;
          this.isDummyImageRemoved = false;
          this.zoomFromOrigin = this.settings.zoomFromOrigin;
          clearTimeout(this.hideBarTimeout);
          this.hideBarTimeout = false;
          $LG("html").removeClass("lg-on");
          this.outer.removeClass("lg-visible lg-components-open");
          this.$backdrop.removeClass("in").css("opacity", 0);
          var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
          this.$container.removeClass("lg-show-in");
          setTimeout(function() {
            if (_this.zoomFromOrigin && transform) {
              _this.outer.removeClass("lg-zoom-from-image");
            }
            _this.$container.removeClass("lg-show");
            _this.resetScrollBar();
            _this.$backdrop.removeAttr("style").css("transition-duration", _this.settings.backdropDuration + "ms");
            _this.outer.removeClass("lg-closing " + _this.settings.startClass);
            _this.getSlideItem(_this.index).removeClass("lg-start-end-progress");
            _this.$inner.empty();
            if (_this.lgOpened) {
              _this.LGel.trigger(lGEvents.afterClose, {
                instance: _this
              });
            }
            if (_this.$container.get()) {
              _this.$container.get().blur();
            }
            _this.lgOpened = false;
          }, removeTimeout + 100);
          return removeTimeout + 100;
        };
        LightGallery2.prototype.initModules = function() {
          this.plugins.forEach(function(module2) {
            try {
              module2.init();
            } catch (err) {
              console.warn("lightGallery:- make sure lightGallery module is properly initiated");
            }
          });
        };
        LightGallery2.prototype.destroyModules = function(destroy) {
          this.plugins.forEach(function(module2) {
            try {
              if (destroy) {
                module2.destroy();
              } else {
                module2.closeGallery && module2.closeGallery();
              }
            } catch (err) {
              console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
            }
          });
        };
        LightGallery2.prototype.refresh = function(galleryItems) {
          if (!this.settings.dynamic) {
            this.invalidateItems();
          }
          if (galleryItems) {
            this.galleryItems = galleryItems;
          } else {
            this.galleryItems = this.getItems();
          }
          this.updateControls();
          this.openGalleryOnItemClick();
          this.LGel.trigger(lGEvents.updateSlides);
        };
        LightGallery2.prototype.updateControls = function() {
          this.addSlideVideoInfo(this.galleryItems);
          this.updateCounterTotal();
          this.manageSingleSlideClassName();
        };
        LightGallery2.prototype.destroyGallery = function() {
          this.destroyModules(true);
          if (!this.settings.dynamic) {
            this.invalidateItems();
          }
          $LG(window).off(".lg.global" + this.lgId);
          this.LGel.off(".lg");
          this.$container.remove();
        };
        LightGallery2.prototype.destroy = function() {
          var closeTimeout = this.closeGallery(true);
          if (closeTimeout) {
            setTimeout(this.destroyGallery.bind(this), closeTimeout);
          } else {
            this.destroyGallery();
          }
          return closeTimeout;
        };
        return LightGallery2;
      }()
    );
    function lightGallery(el, options) {
      return new LightGallery(el, options);
    }
    return lightGallery;
  });
})(lightgallery_umd);
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts, pausedAt } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts, handlers };
}
const css$8 = {
  code: "div.svelte-11kvm4p{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);animation:svelte-11kvm4p-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-11kvm4p::after{content:'';box-sizing:border-box;animation:svelte-11kvm4p-checkmarkAnimation 0.2s ease-out forwards;opacity:0;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@keyframes svelte-11kvm4p-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-11kvm4p-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: `{"version":3,"file":"CheckmarkIcon.svelte","sources":["CheckmarkIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#61d345\\";\\nexport let secondary = \\"#fff\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 20px;\\n\\t\\topacity: 0;\\n\\t\\theight: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t\\tbackground: var(--primary, #61d345);\\n\\t\\tposition: relative;\\n\\t\\ttransform: rotate(45deg);\\n\\t\\tanimation: circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t\\tanimation-delay: 100ms;\\n\\t}\\n\\n\\tdiv::after {\\n\\t\\tcontent: '';\\n\\t\\tbox-sizing: border-box;\\n\\t\\tanimation: checkmarkAnimation 0.2s ease-out forwards;\\n\\t\\topacity: 0;\\n\\t\\tanimation-delay: 200ms;\\n\\t\\tposition: absolute;\\n\\t\\tborder-right: 2px solid;\\n\\t\\tborder-bottom: 2px solid;\\n\\t\\tborder-color: var(--secondary, #fff);\\n\\t\\tbottom: 6px;\\n\\t\\tleft: 6px;\\n\\t\\theight: 10px;\\n\\t\\twidth: 6px;\\n\\t}\\n\\n\\t@keyframes circleAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(45deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(45deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes checkmarkAnimation {\\n\\t\\t0% {\\n\\t\\t\\theight: 0;\\n\\t\\t\\twidth: 0;\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\t40% {\\n\\t\\t\\theight: 0;\\n\\t\\t\\twidth: 6px;\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t\\theight: 10px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CACnC,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,8BAAe,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QAAQ,CAChF,eAAe,CAAE,KAClB,CAEA,kBAAG,OAAQ,CACV,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,iCAAkB,CAAC,IAAI,CAAC,QAAQ,CAAC,QAAQ,CACpD,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,KAAK,CACtB,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,GAAG,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAAC,KAAK,CACxB,YAAY,CAAE,IAAI,WAAW,CAAC,KAAK,CAAC,CACpC,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GACR,CAEA,WAAW,8BAAgB,CAC1B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,iCAAmB,CAC7B,EAAG,CACF,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CACV,CACA,GAAI,CACH,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IACT,CACD"}`
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  $$result.css.add(css$8);
  return `  <div class="svelte-11kvm4p"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$7 = {
  code: "div.svelte-1ee93ns{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);animation:svelte-1ee93ns-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-1ee93ns::after,div.svelte-1ee93ns::before{content:'';animation:svelte-1ee93ns-firstLineAnimation 0.15s ease-out forwards;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-1ee93ns:before{animation:svelte-1ee93ns-secondLineAnimation 0.15s ease-out forwards;animation-delay:180ms;transform:rotate(90deg)}@keyframes svelte-1ee93ns-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1ee93ns-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-1ee93ns-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: `{"version":3,"file":"ErrorIcon.svelte","sources":["ErrorIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#ff4b4b\\";\\nexport let secondary = \\"#fff\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 20px;\\n\\t\\topacity: 0;\\n\\t\\theight: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t\\tbackground: var(--primary, #ff4b4b);\\n\\t\\tposition: relative;\\n\\t\\ttransform: rotate(45deg);\\n\\t\\tanimation: circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t\\tanimation-delay: 100ms;\\n\\t}\\n\\n\\tdiv::after,\\n\\tdiv::before {\\n\\t\\tcontent: '';\\n\\t\\tanimation: firstLineAnimation 0.15s ease-out forwards;\\n\\t\\tanimation-delay: 150ms;\\n\\t\\tposition: absolute;\\n\\t\\tborder-radius: 3px;\\n\\t\\topacity: 0;\\n\\t\\tbackground: var(--secondary, #fff);\\n\\t\\tbottom: 9px;\\n\\t\\tleft: 4px;\\n\\t\\theight: 2px;\\n\\t\\twidth: 12px;\\n\\t}\\n\\n\\tdiv:before {\\n\\t\\tanimation: secondLineAnimation 0.15s ease-out forwards;\\n\\t\\tanimation-delay: 180ms;\\n\\t\\ttransform: rotate(90deg);\\n\\t}\\n\\n\\t@keyframes circleAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(45deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(45deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes firstLineAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes secondLineAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(90deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(90deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CACnC,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,8BAAe,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QAAQ,CAChF,eAAe,CAAE,KAClB,CAEA,kBAAG,OAAO,CACV,kBAAG,QAAS,CACX,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,iCAAkB,CAAC,KAAK,CAAC,QAAQ,CAAC,QAAQ,CACrD,eAAe,CAAE,KAAK,CACtB,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,WAAW,CAAC,KAAK,CAAC,CAClC,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IACR,CAEA,kBAAG,OAAQ,CACV,SAAS,CAAE,kCAAmB,CAAC,KAAK,CAAC,QAAQ,CAAC,QAAQ,CACtD,eAAe,CAAE,KAAK,CACtB,SAAS,CAAE,OAAO,KAAK,CACxB,CAEA,WAAW,8BAAgB,CAC1B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,iCAAmB,CAC7B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACD,CAEA,WAAW,kCAAoB,CAC9B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD"}`
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  $$result.css.add(css$7);
  return `  <div class="svelte-1ee93ns"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$6 = {
  code: "div.svelte-1j7dflg{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);animation:svelte-1j7dflg-rotate 1s linear infinite}@keyframes svelte-1j7dflg-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"LoaderIcon.svelte","sources":["LoaderIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#616161\\";\\nexport let secondary = \\"#e0e0e0\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 12px;\\n\\t\\theight: 12px;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid;\\n\\t\\tborder-radius: 100%;\\n\\t\\tborder-color: var(--secondary, #e0e0e0);\\n\\t\\tborder-right-color: var(--primary, #616161);\\n\\t\\tanimation: rotate 1s linear infinite;\\n\\t}\\n\\n\\t@keyframes rotate {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: rotate(0deg);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: rotate(360deg);\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,WAAW,CAAC,QAAQ,CAAC,CACvC,kBAAkB,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CAC3C,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,MAAM,CAAC,QAC7B,CAEA,WAAW,qBAAO,CACjB,IAAK,CACJ,SAAS,CAAE,OAAO,IAAI,CACvB,CACA,EAAG,CACF,SAAS,CAAE,OAAO,MAAM,CACzB,CACD"}'
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  $$result.css.add(css$6);
  return `  <div class="svelte-1j7dflg"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$5 = {
  code: ".indicator.svelte-1kgeier{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1kgeier{position:absolute}.animated.svelte-1kgeier{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;animation:svelte-1kgeier-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes svelte-1kgeier-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: `{"version":3,"file":"ToastIcon.svelte","sources":["ToastIcon.svelte"],"sourcesContent":["<script>import CheckmarkIcon from \\"./CheckmarkIcon.svelte\\";\\nimport ErrorIcon from \\"./ErrorIcon.svelte\\";\\nimport LoaderIcon from \\"./LoaderIcon.svelte\\";\\nexport let toast;\\n$:\\n  ({ type, icon, iconTheme } = toast);\\n<\/script>\\n\\n{#if typeof icon === 'string'}\\n\\t<div class=\\"animated\\">{icon}</div>\\n{:else if typeof icon !== 'undefined'}\\n\\t<svelte:component this={icon} />\\n{:else if type !== 'blank'}\\n\\t<div class=\\"indicator\\">\\n\\t\\t<LoaderIcon {...iconTheme} />\\n\\t\\t{#if type !== 'loading'}\\n\\t\\t\\t<div class=\\"status\\">\\n\\t\\t\\t\\t{#if type === 'error'}\\n\\t\\t\\t\\t\\t<ErrorIcon {...iconTheme} />\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<CheckmarkIcon {...iconTheme} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.indicator {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmin-width: 20px;\\n\\t\\tmin-height: 20px;\\n\\t}\\n\\n\\t.status {\\n\\t\\tposition: absolute;\\n\\t}\\n\\n\\t.animated {\\n\\t\\tposition: relative;\\n\\t\\ttransform: scale(0.6);\\n\\t\\topacity: 0.4;\\n\\t\\tmin-width: 20px;\\n\\t\\tanimation: enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t}\\n\\n\\t@keyframes enter {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0.6);\\n\\t\\t\\topacity: 0.4;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,yBAAW,CACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACb,CAEA,sBAAQ,CACP,QAAQ,CAAE,QACX,CAEA,wBAAU,CACT,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QACrE,CAEA,WAAW,oBAAM,CAChB,IAAK,CACJ,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACD"}`
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  $$result.css.add(css$5);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="animated svelte-1kgeier">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="indicator svelte-1kgeier">${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})} ${type !== "loading" ? `<div class="status svelte-1kgeier">${type === "error" ? `${validate_component(ErrorIcon, "ErrorIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon, "CheckmarkIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const css$4 = {
  code: ".message.svelte-1nauejd{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: `{"version":3,"file":"ToastMessage.svelte","sources":["ToastMessage.svelte"],"sourcesContent":["<script>export let toast;\\n<\/script>\\n\\n<div class=\\"message\\" {...toast.ariaProps}>\\n\\t{#if typeof toast.message === 'string'}\\n\\t\\t{toast.message}\\n\\t{:else}\\n\\t\\t<svelte:component this={toast.message} {toast} />\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.message {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin: 4px 10px;\\n\\t\\tcolor: inherit;\\n\\t\\tflex: 1 1 auto;\\n\\t\\twhite-space: pre-line;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,uBAAS,CACR,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,WAAW,CAAE,QACd"}`
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  $$result.css.add(css$4);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-1nauejd" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`} </div>`;
});
const css$3 = {
  code: "@keyframes svelte-ug60r4-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-ug60r4-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-ug60r4-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-ug60r4-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-ug60r4{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-ug60r4{opacity:0}.enter.svelte-ug60r4{animation:svelte-ug60r4-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-ug60r4{animation:svelte-ug60r4-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-ug60r4{animation:svelte-ug60r4-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-ug60r4{animation:svelte-ug60r4-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: `{"version":3,"file":"ToastBar.svelte","sources":["ToastBar.svelte"],"sourcesContent":["<script>import ToastIcon from \\"./ToastIcon.svelte\\";\\nimport { prefersReducedMotion } from \\"../core/utils\\";\\nimport ToastMessage from \\"./ToastMessage.svelte\\";\\nexport let toast;\\nexport let position = void 0;\\nexport let style = \\"\\";\\nexport let Component = void 0;\\nlet factor;\\nlet animation;\\n$: {\\n  const top = (toast.position || position || \\"top-center\\").includes(\\"top\\");\\n  factor = top ? 1 : -1;\\n  const [enter, exit] = prefersReducedMotion() ? [\\"fadeIn\\", \\"fadeOut\\"] : [\\"enter\\", \\"exit\\"];\\n  animation = toast.visible ? enter : exit;\\n}\\n<\/script>\\n\\n<div\\n\\tclass=\\"base {toast.height ? animation : 'transparent'} {toast.className || ''}\\"\\n\\tstyle=\\"{style}; {toast.style}\\"\\n\\tstyle:--factor={factor}\\n>\\n\\t{#if Component}\\n\\t\\t<svelte:component this={Component}>\\n\\t\\t\\t<ToastIcon {toast} slot=\\"icon\\" />\\n\\t\\t\\t<ToastMessage {toast} slot=\\"message\\" />\\n\\t\\t</svelte:component>\\n\\t{:else}\\n\\t\\t<slot {ToastIcon} {ToastMessage} {toast}>\\n\\t\\t\\t<ToastIcon {toast} />\\n\\t\\t\\t<ToastMessage {toast} />\\n\\t\\t</slot>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t@keyframes enterAnimation {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);\\n\\t\\t\\topacity: 0.5;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate3d(0, 0, 0) scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes exitAnimation {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate3d(0, 0, -1px) scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes fadeInAnimation {\\n\\t\\t0% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes fadeOutAnimation {\\n\\t\\t0% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t.base {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tbackground: #fff;\\n\\t\\tcolor: #363636;\\n\\t\\tline-height: 1.3;\\n\\t\\twill-change: transform;\\n\\t\\tbox-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\\n\\t\\tmax-width: 350px;\\n\\t\\tpointer-events: auto;\\n\\t\\tpadding: 8px 10px;\\n\\t\\tborder-radius: 8px;\\n\\t}\\n\\n\\t.transparent {\\n\\t\\topacity: 0;\\n\\t}\\n\\n\\t.enter {\\n\\t\\tanimation: enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;\\n\\t}\\n\\n\\t.exit {\\n\\t\\tanimation: exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;\\n\\t}\\n\\n\\t.fadeIn {\\n\\t\\tanimation: fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;\\n\\t}\\n\\n\\t.fadeOut {\\n\\t\\tanimation: fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoCC,WAAW,4BAAe,CACzB,EAAG,CACF,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,GAAG,CAAC,CACpE,OAAO,CAAE,GACV,CACA,IAAK,CACJ,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACxC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,2BAAc,CACxB,EAAG,CACF,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,CAC3C,OAAO,CAAE,CACV,CACA,IAAK,CACJ,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,GAAG,CAAC,CACvE,OAAO,CAAE,CACV,CACD,CAEA,WAAW,6BAAgB,CAC1B,EAAG,CACF,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CACV,CACD,CAEA,WAAW,8BAAiB,CAC3B,EAAG,CACF,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CACV,CACD,CAEA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,SAAS,CACtB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACxE,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,GAChB,CAEA,0BAAa,CACZ,OAAO,CAAE,CACV,CAEA,oBAAO,CACN,SAAS,CAAE,4BAAc,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACnE,CAEA,mBAAM,CACL,SAAS,CAAE,2BAAa,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACjE,CAEA,qBAAQ,CACP,SAAS,CAAE,6BAAe,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACpE,CAEA,sBAAS,CACR,SAAS,CAAE,8BAAgB,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACpE"}`
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0) $$bindings.Component(Component);
  $$result.css.add(css$3);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-ug60r4"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon, ToastMessage, toast: toast2 }) : ` ${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})} ${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})} `}`} </div>`;
});
const css$2 = {
  code: ".wrapper.svelte-v01oml{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-v01oml{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-v01oml{z-index:9999}.active.svelte-v01oml>*{pointer-events:auto}",
  map: `{"version":3,"file":"ToastWrapper.svelte","sources":["ToastWrapper.svelte"],"sourcesContent":["<script>import { onMount } from \\"svelte\\";\\nimport { prefersReducedMotion } from \\"../core/utils\\";\\nimport ToastBar from \\"./ToastBar.svelte\\";\\nimport ToastMessage from \\"./ToastMessage.svelte\\";\\nexport let toast;\\nexport let setHeight;\\nlet wrapperEl;\\nonMount(() => {\\n  setHeight(wrapperEl.getBoundingClientRect().height);\\n});\\n$:\\n  top = toast.position?.includes(\\"top\\") ? 0 : null;\\n$:\\n  bottom = toast.position?.includes(\\"bottom\\") ? 0 : null;\\n$:\\n  factor = toast.position?.includes(\\"top\\") ? 1 : -1;\\n$:\\n  justifyContent = toast.position?.includes(\\"center\\") && \\"center\\" || (toast.position?.includes(\\"right\\") || toast.position?.includes(\\"end\\")) && \\"flex-end\\" || null;\\n<\/script>\\n\\n<div\\n\\tbind:this={wrapperEl}\\n\\tclass=\\"wrapper\\"\\n\\tclass:active={toast.visible}\\n\\tclass:transition={!prefersReducedMotion()}\\n\\tstyle:--factor={factor}\\n\\tstyle:--offset={toast.offset}\\n\\tstyle:top\\n\\tstyle:bottom\\n\\tstyle:justify-content={justifyContent}\\n>\\n\\t{#if toast.type === 'custom'}\\n\\t\\t<ToastMessage {toast} />\\n\\t{:else}\\n\\t\\t<slot {toast}>\\n\\t\\t\\t<ToastBar {toast} position={toast.position} />\\n\\t\\t</slot>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.wrapper {\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tdisplay: flex;\\n\\t\\tposition: absolute;\\n\\t\\ttransform: translateY(calc(var(--offset, 16px) * var(--factor) * 1px));\\n\\t}\\n\\n\\t.transition {\\n\\t\\ttransition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1);\\n\\t}\\n\\n\\t.active {\\n\\t\\tz-index: 9999;\\n\\t}\\n\\n\\t.active > :global(*) {\\n\\t\\tpointer-events: auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyCC,sBAAS,CACR,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,WAAW,KAAK,IAAI,QAAQ,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtE,CAEA,yBAAY,CACX,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACvD,CAEA,qBAAQ,CACP,OAAO,CAAE,IACV,CAEA,qBAAO,CAAW,CAAG,CACpB,cAAc,CAAE,IACjB"}`
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0) $$bindings.setHeight(setHeight);
  $$result.css.add(css$2);
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-v01oml",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : ` ${validate_component(ToastBar, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})} `}`} </div>`;
});
const css$1 = {
  code: ".toaster.svelte-1phplh9{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: `{"version":3,"file":"Toaster.svelte","sources":["Toaster.svelte"],"sourcesContent":["<script>import useToaster from \\"../core/use-toaster\\";\\nimport ToastWrapper from \\"./ToastWrapper.svelte\\";\\nexport let reverseOrder = false;\\nexport let position = \\"top-center\\";\\nexport let toastOptions = void 0;\\nexport let gutter = 8;\\nexport let containerStyle = void 0;\\nexport let containerClassName = void 0;\\nconst { toasts, handlers } = useToaster(toastOptions);\\nlet _toasts;\\n$:\\n  _toasts = $toasts.map((toast) => ({\\n    ...toast,\\n    position: toast.position || position,\\n    offset: handlers.calculateOffset(toast, $toasts, {\\n      reverseOrder,\\n      gutter,\\n      defaultPosition: position\\n    })\\n  }));\\n<\/script>\\n\\n<div\\n\\tclass=\\"toaster {containerClassName || ''}\\"\\n\\tstyle={containerStyle}\\n\\ton:mouseenter={handlers.startPause}\\n\\ton:mouseleave={handlers.endPause}\\n\\trole=\\"alert\\"\\n>\\n\\t{#each _toasts as toast (toast.id)}\\n\\t\\t<ToastWrapper {toast} setHeight={(height) => handlers.updateHeight(toast.id, height)} />\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.toaster {\\n\\t\\t--default-offset: 16px;\\n\\n\\t\\tposition: fixed;\\n\\t\\tz-index: 9999;\\n\\t\\ttop: var(--default-offset);\\n\\t\\tleft: var(--default-offset);\\n\\t\\tright: var(--default-offset);\\n\\t\\tbottom: var(--default-offset);\\n\\t\\tpointer-events: none;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmCC,uBAAS,CACR,gBAAgB,CAAE,IAAI,CAEtB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,gBAAgB,CAAC,CAC1B,IAAI,CAAE,IAAI,gBAAgB,CAAC,CAC3B,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,cAAc,CAAE,IACjB"}`
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0) $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0) $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0) $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0) $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0) $$bindings.containerClassName(containerClassName);
  $$result.css.add(css$1);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-1phplh9"}"${add_attribute("style", containerStyle, 0)} role="alert">${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css = {
  code: 'body.svelte-q6ohhe{font-family:"Raleway", sans-serif;background-color:white}.full-page.svelte-q6ohhe{display:flex;align-items:center;justify-content:center;width:100%;height:90vh}',
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\n    import Footer from \\"$lib/components/Footer.svelte\\";\\n    import Header from \\"$lib/components/Header.svelte\\";\\n    import '@splidejs/svelte-splide/css';\\n    import AOS from 'aos';\\n    import '../../node_modules/aos/dist/aos.css'\\n    import '../../node_modules/lightgallery/css/lightgallery-bundle.css'\\n    import '../../node_modules/lightgallery/css/lightgallery.css' \\n    import '../../node_modules/lightgallery/lightgallery.umd.js'\\n   \\n    import { onMount } from \\"svelte\\";\\n    import { page } from \\"$app/stores\\";\\n    import { collection, getDocs } from \\"firebase/firestore\\"; \\n    import {db} from '../lib/firebase.client'\\n    import {paginas,generales,cargado} from '../lib/stores'\\n    import toast, {Toaster} from 'svelte-french-toast'\\n    import { Jellyfish } from 'svelte-loading-spinners';\\n    import firebase from \\"firebase/compat/app\\";\\n    import { onAuthStateChanged } from \\"firebase/auth\\";\\n    import { initializeFirebase, auth } from '../lib/firebase.client';\\n\\n    let loading = false\\n    onMount(()=>{\\n\\n       \\n\\n        firebaseStart()\\n\\n        getCollections()\\n\\n        AOS.init({duration: 1000});\\n    })\\n\\n    async function firebaseStart(){\\n        try {\\n            initializeFirebase();\\n        } catch (ex) {\\n        console.error(ex);\\n        }\\n/*\\n        return {\\n        getAuthUser: getAuthUser,\\n        url: url.pathname\\n        };\\n        */\\n    }\\n\\n    function getAuthUser() {\\n    return new Promise((resolve) => {\\n        onAuthStateChanged(auth, (user) => resolve(user ? user : false));\\n        });\\n    }\\n\\n    async function getCollections(){\\n        loading = true\\n        const querySnapshot = await getDocs(collection(db, \\"paginas\\"))\\n        \\n        querySnapshot.forEach((doc) => {$paginas[doc.id] = doc.data();});\\n\\n        const querySnapshot2 = await getDocs(collection(db, \\"generales\\"))\\n        querySnapshot2.forEach((doc) => {$generales[doc.id] = doc.data();});\\n        \\n        loading = false\\n    }\\n\\n\\n<\/script>\\n<svelte:head>\\n   <title>Layout Aleman</title>\\n</svelte:head>\\n<body>\\n    {#if $paginas?.inicio && $generales.contacto && !loading}\\n        {#if !$page?.route.id?.includes('/admin')}\\n        <Header/>\\n        {/if}\\n\\n       \\n            <slot/>\\n    \\n        {#if !$page?.route.id?.includes('/admin')}\\n        <Footer/>\\n        {/if}\\n    {:else} \\n    <div class=\\"full-page\\">\\n        <img class=\\"menu-logo parpadea\\" src=\\"{$generales?.logos?.logo_negro}\\" alt=\\"\\" width=\\"150\\">\\n        <!--<Jellyfish size=\\"100\\" color=\\"black\\" unit=\\"px\\" duration=\\"1s\\" />  -->\\n        \\n    </div>\\n         \\n    {/if}\\n    <Toaster />\\n</body>\\n\\n\\n\\n<style>\\n\\n    body{\\n        font-family: \\"Raleway\\", sans-serif; background-color: white; \\n    }/*f9f9f9*/\\n    .full-page{display: flex;align-items: center;justify-content: center;width: 100%;height: 90vh;}\\n   \\n   \\n</style>\\n"],"names":[],"mappings":"AAkGI,kBAAI,CACA,WAAW,CAAE,SAAS,CAAC,CAAC,UAAU,CAAE,gBAAgB,CAAE,KAC1D,CACA,wBAAU,CAAC,OAAO,CAAE,IAAI,CAAC,WAAW,CAAE,MAAM,CAAC,eAAe,CAAE,MAAM,CAAC,KAAK,CAAE,IAAI,CAAC,MAAM,CAAE,IAAK"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $generales, $$unsubscribe_generales;
  let $paginas, $$unsubscribe_paginas;
  let $page, $$unsubscribe_page;
  $$unsubscribe_generales = subscribe(generales, (value) => $generales = value);
  $$unsubscribe_paginas = subscribe(paginas, (value) => $paginas = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let loading = false;
  $$result.css.add(css);
  $$unsubscribe_generales();
  $$unsubscribe_paginas();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-g4sq7f_START -->${$$result.title = `<title>Layout Aleman</title>`, ""}<!-- HEAD_svelte-g4sq7f_END -->`, ""} <body class="svelte-q6ohhe">${$paginas?.inicio && $generales.contacto && !loading ? `${!$page?.route.id?.includes("/admin") ? `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``} ${!$page?.route.id?.includes("/admin") ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}` : ``}` : `<div class="full-page svelte-q6ohhe"><img class="menu-logo parpadea"${add_attribute("src", $generales?.logos?.logo_negro, 0)} alt="" width="150"> </div>`} ${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} </body>`;
});
export {
  Layout as default
};
