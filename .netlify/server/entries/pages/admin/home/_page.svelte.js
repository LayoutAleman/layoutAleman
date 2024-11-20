import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, v as validate_component, n as null_to_empty } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { g as generales } from "../../../../chunks/stores.js";
import "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/storage";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
const css$1 = {
  code: ".previewdiv.svelte-ugraaa.svelte-ugraaa{width:auto;max-width:100%;min-height:100px;border:2px solid #ddd;display:flex;align-items:center;justify-content:center;font-weight:bold;color:#ccc;position:relative}.previewdiv.svelte-ugraaa img.svelte-ugraaa{max-width:100%}.delete-img.svelte-ugraaa.svelte-ugraaa{position:absolute;z-index:10;right:10px;top:10px}",
  map: `{"version":3,"file":"PreviewImages.svelte","sources":["PreviewImages.svelte"],"sourcesContent":["<script>\\n  export  let input;\\n  export let show_close = true\\n  export let image_existing\\n  export let id = ''\\n  export let label = ''\\n  \\n  let container;\\n  let image;\\n  let placeholder;\\n\\tlet showImage = true;\\n    \\n  function onChange(clear = false) {\\n    let file = input.files[0];\\n\\t\\t\\n    if (file && !clear) {\\n\\t\\t\\tshowImage = true;\\n\\n      const reader = new FileReader();\\n      reader.addEventListener(\\"load\\", function () {\\n        image.setAttribute(\\"src\\", reader.result);\\n      });\\n      reader.readAsDataURL(file);\\n\\t\\t\\t\\n\\t\\t\\treturn;\\n    }\\n\\t\\tshowImage = false; \\n  }\\n\\n \\n<\/script>\\n<div class=\\"mb-3\\">\\n    <label for=\\"{id}\\" class=\\"form-label\\">{label}</label>\\n    <div class=\\"previewdiv {label == 'Logo Blanco'?'bg-dark':''}\\"  bind:this={container}>\\n        {#if showImage}\\n        {#if show_close}\\n        <button class=\\"delete-img btn\\" on:click={()=>onChange(true)}> <i class=\\"bi bi-x-lg\\"></i></button>\\n        {/if}\\n            <img bind:this={image} src=\\"{image_existing}\\" alt=\\"Preview\\" />\\n        {:else}\\n            <span bind:this={placeholder}></span>\\n        {/if}\\n    </div>\\n  <input id=\\"{id}\\" class=\\"form-control mt-2\\"  bind:this={input} on:change={()=>onChange(false)} type=\\"file\\"/>\\n\\n</div>\\n\\n<style>\\n\\t.previewdiv {\\n        width: auto;\\n    max-width: 100%;\\n    min-height: 100px;\\n    border: 2px solid #ddd;\\n    \\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-weight: bold;\\n    color: #ccc;\\n    position: relative;\\n  }\\n  .previewdiv img{max-width: 100%;}\\n  .delete-img {\\n    position: absolute;\\n    z-index: 10;\\n    right: 10px;\\n    top: 10px;\\n  }\\n</style>"],"names":[],"mappings":"AAgDC,uCAAY,CACL,KAAK,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAEtB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QACZ,CACA,yBAAW,CAAC,iBAAG,CAAC,SAAS,CAAE,IAAK,CAChC,uCAAY,CACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IACP"}`
};
const PreviewImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { input } = $$props;
  let { show_close = true } = $$props;
  let { image_existing } = $$props;
  let { id = "" } = $$props;
  let { label = "" } = $$props;
  let container;
  let image;
  if ($$props.input === void 0 && $$bindings.input && input !== void 0) $$bindings.input(input);
  if ($$props.show_close === void 0 && $$bindings.show_close && show_close !== void 0) $$bindings.show_close(show_close);
  if ($$props.image_existing === void 0 && $$bindings.image_existing && image_existing !== void 0) $$bindings.image_existing(image_existing);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  $$result.css.add(css$1);
  return `<div class="mb-3"><label${add_attribute("for", id, 0)} class="form-label">${escape(label)}</label> <div class="${"previewdiv " + escape(label == "Logo Blanco" ? "bg-dark" : "", true) + " svelte-ugraaa"}"${add_attribute("this", container, 0)}>${`${show_close ? `<button class="delete-img btn svelte-ugraaa" data-svelte-h="svelte-183oipn"><i class="bi bi-x-lg"></i></button>` : ``} <img${add_attribute("src", image_existing, 0)} alt="Preview" class="svelte-ugraaa"${add_attribute("this", image, 0)}>`}</div> <input${add_attribute("id", id, 0)} class="form-control mt-2" type="file"> </div>`;
});
const PaginaGeneral = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $generales, $$unsubscribe_generales;
  $$unsubscribe_generales = subscribe(generales, (value) => $generales = value);
  let file_logo_negro;
  let file_logo_blanco;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="admin-pagina"><h1 data-svelte-h="svelte-1n516qi">GENERAL</h1> <div class="row mx-0"><div class="col-9"><form>${$generales ? `<div class="mb-5"><label for="general_email" class="form-label" data-svelte-h="svelte-1nvjhqb">Email</label> <input required type="text" class="form-control" id="general_email"${add_attribute("value", $generales.contacto.correo, 0)}></div> <div class="mb-3 row ml-"><label for="general_insta" class="col-sm-2 col-form-label" data-svelte-h="svelte-1qa1d11"><i style="color:#5b1a79" class="bi bi-instagram"></i> Instagram</label> <div class="col-sm-10"><input type="text" class="form-control" id="general_insta"${add_attribute("value", $generales.contacto.instagram, 0)}></div></div> <div class="mb-3 row ml-"><label for="general_face" class="col-sm-2 col-form-label" data-svelte-h="svelte-1qmhtwg"><i class="bi bi-facebook" style="color:#2f60dd"></i> Facebook</label> <div class="col-sm-10"><input type="text" class="form-control" id="general_face"${add_attribute("value", $generales.contacto.facebook, 0)}></div></div> <div class="mb-3 row ml-"><label for="general_whats" class="col-sm-2 col-form-label" data-svelte-h="svelte-5csco7"><i class="bi bi-whatsapp" style="color:#22d322"></i> Whatsapp</label> <div class="col-sm-10"><input type="tel" class="form-control" id="general_whats"${add_attribute("value", $generales.contacto.whatsapp, 0)}></div></div> <hr class="my-5 separation-line"> <div class="row"><div class="col-6">${validate_component(PreviewImages, "PreviewImages").$$render(
      $$result,
      {
        id: "general_logo-negro",
        show_close: false,
        label: "Logo Negro",
        image_existing: $generales.logos.logo_negro,
        input: file_logo_negro
      },
      {
        image_existing: ($$value) => {
          $generales.logos.logo_negro = $$value;
          $$settled = false;
        },
        input: ($$value) => {
          file_logo_negro = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="col-6">${validate_component(PreviewImages, "PreviewImages").$$render(
      $$result,
      {
        id: "general_logo-blanco",
        show_close: false,
        label: "Logo Blanco",
        image_existing: $generales.logos.logo_blanco,
        input: file_logo_blanco
      },
      {
        image_existing: ($$value) => {
          $generales.logos.logo_blanco = $$value;
          $$settled = false;
        },
        input: ($$value) => {
          file_logo_blanco = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="row justify-content-end"><button type="submit" class="btn btn-adcent col-3" ${""}>Guardar ${``}</button></div>` : ``}</form></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_generales();
  return $$rendered;
});
const css = {
  code: ".side-menu.svelte-3jkgn8.svelte-3jkgn8{height:100vh;position:fixed}.side-menu.svelte-3jkgn8 i.svelte-3jkgn8{font-size:21px;margin-right:7px;color:rgba(0, 0, 0, 0.572)}.submenus.svelte-3jkgn8 li.svelte-3jkgn8{font-size:16px;padding-left:23%;margin-bottom:7px}.side-menu.svelte-3jkgn8 .active.svelte-3jkgn8{font-weight:600}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { goto } from '$app/navigation';\\n    import PaginaContacto from '$lib/components/admin/PaginaContacto.svelte';\\n    import PaginaEjemplo from '$lib/components/admin/PaginaEjemplo.svelte';\\n    import PaginaGeneral from '$lib/components/admin/PaginaGeneral.svelte';\\n    import PaginaInicio from '$lib/components/admin/PaginaInicio.svelte';\\n    import PaginaProyectos from '$lib/components/admin/PaginaProyectos.svelte';\\n    import { onMount } from 'svelte';\\n    import {generales} from '../../../lib/stores'\\n    import { getAuth, signOut } from \\"firebase/auth\\";\\n    import PaginaScouting from '$lib/components/admin/PaginaScouting.svelte';\\n    import PaginaLayout from '$lib/components/admin/PaginaLayout.svelte';\\n    import PaginaRenders from '$lib/components/admin/PaginaRenders.svelte';\\n\\n    let opcion = ''\\n   \\n    onMount(()=>{\\n      getAuth().onAuthStateChanged(function(user) {\\n        \\n        if (!user) {\\n          goto('/admin')\\n        }\\n      });\\n    })\\n\\n    \\n    const auth = getAuth();\\n\\n    function logout(){\\n      signOut(auth).then(() => {\\n          goto('/admin')\\n      }).catch((error) => {\\n        // An error happened.\\n      });\\n    }\\n   \\n<\/script>\\n\\n    <div class=\\"row mx-0\\">\\n        <div class=\\"d-flex flex-column flex-shrink-0 p-3 bg-light col-2 side-menu\\" >\\n            <a href=\\"/\\" target=\\"_blank\\" class=\\"text-center mb-3 mb-md-0  link-dark text-decoration-none\\">\\n              <img width=\\"50\\" src=\\"{$generales.logos.logo_negro}\\" alt=\\"\\">\\n              <br>\\n              <span class=\\"fs-4\\">Layout Aleman</span>\\n            </a>\\n            <hr>\\n            <ul class=\\"nav nav-pills flex-column mb-auto\\">\\n              <li class=\\"nav-item  {opcion==''?'active':''}\\">\\n                <a href=\\"#\\" on:click={()=>opcion=''} class=\\"nav-link link-dark d-flex align-items-center\\" aria-current=\\"page\\">\\n                    <i class=\\"bi bi-house\\"></i>\\n                  General\\n                </a>\\n              </li>\\n              <li class=\\"nav-link link-dark\\">\\n                <a class=\\"align-items-center dropdown-toggle\\" data-bs-toggle=\\"collapse\\" href=\\"#home-collapse\\" aria-expanded=\\"true\\">\\n                    <i class=\\"bi bi-file-earmark\\"></i>  Paginas\\n                </a>\\n                <div class=\\"collapse submenus mt-2\\" id=\\"home-collapse\\" style=\\"\\">\\n                  <ul class=\\"btn-toggle-nav list-unstyled fw-normal pb-1 small\\">\\n                    <li class=\\"{opcion=='inicio'?'active':''}\\"><a href=\\"#\\" on:click={()=>opcion='inicio'} class=\\"link-dark \\">Inicio</a></li>\\n                    <li><a href=\\"#\\" class=\\"link-dark {opcion=='ejemplo'?'active':''}\\" on:click={()=>opcion='ejemplo'}>Servicios</a></li>\\n                    <li><a href=\\"#\\" class=\\"link-dark {opcion=='contactopag'?'active':''}\\" on:click={()=>opcion='contactopag'}>Contacto</a></li>\\n                  </ul>\\n                </div>\\n              </li>\\n              <li class=\\"nav-link link-dark\\">\\n                <a class=\\"align-items-center dropdown-toggle\\" data-bs-toggle=\\"collapse\\" href=\\"#home-collapse2\\" aria-expanded=\\"true\\">\\n                    <i class=\\"bi bi-motherboard\\"></i>  Servicios\\n                </a>\\n                <div class=\\"collapse submenus mt-2\\" id=\\"home-collapse2\\" style=\\"\\">\\n                  <ul class=\\"btn-toggle-nav list-unstyled fw-normal pb-1 small\\">\\n                    <li class=\\"{opcion=='scouting'?'active':''}\\"><a href=\\"#\\" on:click={()=>opcion='scouting'} class=\\"link-dark \\">Scouting</a></li>\\n                    <li><a href=\\"#\\" class=\\"link-dark {opcion=='layout'?'active':''}\\" on:click={()=>opcion='layout'}>Layout</a></li>\\n                    <li><a href=\\"#\\" class=\\"link-dark {opcion=='renders'?'active':''}\\" on:click={()=>opcion='renders'}>Render y 360</a></li>\\n                  </ul>\\n                </div>\\n              </li>\\n              <li class=\\"nav-item {opcion=='proyectos'?'active':''}\\">\\n                <a href=\\"#\\" class=\\"nav-link link-dark d-flex align-items-center\\" aria-current=\\"page\\" on:click={()=>opcion='proyectos'}>\\n                    <i class=\\"bi bi-images\\"></i>\\n                  Proyectos\\n                </a>\\n              </li>\\n             \\n            </ul>\\n\\n            \\n            <hr>\\n            <div class=\\"dropdown\\">\\n              <a href=\\"#\\" on:click={logout} class=\\"d-flex align-items-center link-dark text-decoration-none \\" id=\\"dropdownUser2\\" data-bs-toggle=\\"dropdown\\" aria-expanded=\\"false\\">\\n                <strong>sign out</strong>\\n              </a>\\n             \\n            </div>\\n        </div>\\n        <div class=\\"col-2\\"></div>\\n\\n        <div class=\\"col-10 bg-white\\">\\n            {#if opcion=='inicio'}\\n                <PaginaInicio/>\\n            {:else if opcion=='contactopag'}    \\n                <PaginaContacto/>  \\n            {:else if opcion=='ejemplo'}   \\n                <PaginaEjemplo/>\\n            {:else if opcion=='proyectos'}   \\n                <PaginaProyectos/>\\n            {:else if opcion=='scouting'}   \\n                <PaginaScouting/>\\n            {:else if opcion=='layout'}   \\n                <PaginaLayout/>\\n            {:else if opcion=='renders'}   \\n                <PaginaRenders/>\\n            {:else if opcion==''}     \\n                <PaginaGeneral/>\\n            {/if}\\n        </div>\\n    </div>\\n\\n    <style>\\n        .side-menu{height: 100vh; position: fixed;}\\n        .side-menu i{font-size: 21px;margin-right: 7px; color: rgba(0, 0, 0, 0.572);}\\n        .submenus li{font-size: 16px;padding-left: 23%;margin-bottom: 7px;}\\n        .side-menu .active{font-weight: 600;}\\n    </style>\\n\\n"],"names":[],"mappings":"AAuHQ,sCAAU,CAAC,MAAM,CAAE,KAAK,CAAE,QAAQ,CAAE,KAAM,CAC1C,wBAAU,CAAC,eAAC,CAAC,SAAS,CAAE,IAAI,CAAC,YAAY,CAAE,GAAG,CAAE,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAE,CAC5E,uBAAS,CAAC,gBAAE,CAAC,SAAS,CAAE,IAAI,CAAC,YAAY,CAAE,GAAG,CAAC,aAAa,CAAE,GAAI,CAClE,wBAAU,CAAC,qBAAO,CAAC,WAAW,CAAE,GAAI"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $generales, $$unsubscribe_generales;
  $$unsubscribe_generales = subscribe(generales, (value) => $generales = value);
  getAuth();
  $$result.css.add(css);
  $$unsubscribe_generales();
  return `<div class="row mx-0"><div class="d-flex flex-column flex-shrink-0 p-3 bg-light col-2 side-menu svelte-3jkgn8"><a href="/" target="_blank" class="text-center mb-3 mb-md-0 link-dark text-decoration-none"><img width="50"${add_attribute("src", $generales.logos.logo_negro, 0)} alt=""> <br> <span class="fs-4" data-svelte-h="svelte-kwr2o5">Layout Aleman</span></a> <hr> <ul class="nav nav-pills flex-column mb-auto"><li class="${"nav-item " + escape("active", true) + " svelte-3jkgn8"}"><a href="#" class="nav-link link-dark d-flex align-items-center" aria-current="page" data-svelte-h="svelte-2etx0o"><i class="bi bi-house svelte-3jkgn8"></i>
                  General</a></li> <li class="nav-link link-dark"><a class="align-items-center dropdown-toggle" data-bs-toggle="collapse" href="#home-collapse" aria-expanded="true" data-svelte-h="svelte-1v7mxcm"><i class="bi bi-file-earmark svelte-3jkgn8"></i>  Paginas</a> <div class="collapse submenus mt-2 svelte-3jkgn8" id="home-collapse" style=""><ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"><li class="${escape(null_to_empty(""), true) + " svelte-3jkgn8"}"><a href="#" class="link-dark " data-svelte-h="svelte-17mrt3m">Inicio</a></li> <li class="svelte-3jkgn8"><a href="#" class="${"link-dark " + escape("", true) + " svelte-3jkgn8"}">Servicios</a></li> <li class="svelte-3jkgn8"><a href="#" class="${"link-dark " + escape("", true) + " svelte-3jkgn8"}">Contacto</a></li></ul></div></li> <li class="nav-link link-dark"><a class="align-items-center dropdown-toggle" data-bs-toggle="collapse" href="#home-collapse2" aria-expanded="true" data-svelte-h="svelte-p25du3"><i class="bi bi-motherboard svelte-3jkgn8"></i>  Servicios</a> <div class="collapse submenus mt-2 svelte-3jkgn8" id="home-collapse2" style=""><ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"><li class="${escape(null_to_empty(""), true) + " svelte-3jkgn8"}"><a href="#" class="link-dark " data-svelte-h="svelte-907vhq">Scouting</a></li> <li class="svelte-3jkgn8"><a href="#" class="${"link-dark " + escape("", true) + " svelte-3jkgn8"}">Layout</a></li> <li class="svelte-3jkgn8"><a href="#" class="${"link-dark " + escape("", true) + " svelte-3jkgn8"}">Render y 360</a></li></ul></div></li> <li class="${"nav-item " + escape("", true) + " svelte-3jkgn8"}"><a href="#" class="nav-link link-dark d-flex align-items-center" aria-current="page" data-svelte-h="svelte-16fzxw8"><i class="bi bi-images svelte-3jkgn8"></i>
                  Proyectos</a></li></ul> <hr> <div class="dropdown"><a href="#" class="d-flex align-items-center link-dark text-decoration-none " id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false" data-svelte-h="svelte-kjcjl8"><strong>sign out</strong></a></div></div> <div class="col-2"></div> <div class="col-10 bg-white">${`${`${`${`${`${`${`${`${validate_component(PaginaGeneral, "PaginaGeneral").$$render($$result, {}, {}, {})}`}`}`}`}`}`}`}`}</div> </div>`;
});
export {
  Page as default
};
