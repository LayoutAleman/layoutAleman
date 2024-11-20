import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../../chunks/ssr.js";
import { g as generales } from "../../../chunks/stores.js";
import { w as writable } from "../../../chunks/index2.js";
import "firebase/auth";
import "../../../chunks/client.js";
const session = writable();
const css = {
  code: ".form-middle.svelte-18g40q9{max-width:300px}.container-login.svelte-18g40q9{height:80vh}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import {generales} from '../../lib/stores'\\n    import { session } from '$lib/session';\\n\\n\\timport {signInWithEmailAndPassword,getAuth} from 'firebase/auth';\\n\\timport { goto } from '$app/navigation';\\n    import { onMount } from 'svelte';\\n    let error = ''\\n    let email = '';\\n\\tlet password = '';\\n    let isLoading = false\\n\\n    onMount(()=>{\\n        getAuth().onAuthStateChanged(function(user) {\\n           \\n           if (user) {\\n           goto('/admin/home')\\n           }\\n       });\\n\\n        if(localStorage.getItem(\\"LytAleman_email\\")){\\n            email = localStorage.getItem(\\"LytAleman_email\\")\\n            \\n        }\\n    })\\n    async function loginWithMail() {\\n        isLoading = true\\n        error = ''\\n\\t\\tawait signInWithEmailAndPassword(getAuth(), email, password)\\n\\t\\t\\t.then((result) => {\\n\\t\\t\\t\\tconst { user } = result;\\n\\t\\t\\t\\tsession.set({\\n\\t\\t\\t\\t\\tloggedIn: true,\\n\\t\\t\\t\\t\\tuser: {\\n\\t\\t\\t\\t\\t\\tdisplayName: user?.displayName,\\n\\t\\t\\t\\t\\t\\temail: user?.email,\\n\\t\\t\\t\\t\\t\\tphotoURL: user?.photoURL,\\n\\t\\t\\t\\t\\t\\tuid: user?.uid\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t});\\n                localStorage.setItem(\\"LytAleman_email\\", email);\\n                localStorage.setItem(\\"LytAleman\\", JSON.stringify($session));\\n           \\n\\t\\t\\t\\tgoto('/admin/home');\\n\\t\\t\\t})\\n\\t\\t\\t.catch((err) => {\\n                error = err.code\\n\\t\\t\\t\\treturn err;\\n\\t\\t\\t});\\n            isLoading = false\\n\\t}\\n\\n    \\n<\/script>\\n\\n<div class=\\"container \\">\\n    <div class=\\"row justify-content-center align-items-center container-login\\">\\n        <div class=\\"form-middle\\">\\n            <form on:submit={loginWithMail}>\\n                <div class=\\"row justify-content-center\\">\\n                <img class=\\"col-6\\" src=\\"{$generales.logos.logo_negro}\\" alt=\\"\\">\\n            </div>\\n                <div class=\\"form-group mt-3 mb-2\\">\\n                  <label for=\\"exampleInputEmail1\\">Email address</label>\\n                  <input required name='email' bind:value={email} type=\\"email\\" class=\\"form-control\\" id=\\"exampleInputEmail1\\" aria-describedby=\\"emailHelp\\" placeholder=\\"Enter email\\">\\n                 <!-- -->\\n                </div>\\n                <div class=\\"form-group\\">\\n                  <label for=\\"exampleInputPassword1\\">Password</label>\\n                  <input required name='password' bind:value={password} type=\\"password\\" class=\\"form-control\\" id=\\"exampleInputPassword1\\" placeholder=\\"Password\\">\\n                </div>\\n                {#if error}<small id=\\"emailHelp\\" class=\\"form-text text-danger\\">{error}</small>{/if}\\n                <div class=\\"row justify-content-center mt-3\\">\\n                    <button type=\\"submit\\" disabled={isLoading} class=\\"btn btn-adcent col-4\\" >Submit {#if isLoading}<div class=\\"spinner-border spinner-border-sm\\" role=\\"status\\"></div>{/if}</button>\\n                    \\n                </div>\\n                \\n              </form>\\n        </div>\\n    </div>\\n   \\n</div>\\n\\n<style>\\n    .form-middle{max-width: 300px;}\\n    .container-login{height: 80vh;}\\n</style>"],"names":[],"mappings":"AAoFI,2BAAY,CAAC,SAAS,CAAE,KAAM,CAC9B,+BAAgB,CAAC,MAAM,CAAE,IAAK"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  let $generales, $$unsubscribe_generales;
  $$unsubscribe_session = subscribe(session, (value) => value);
  $$unsubscribe_generales = subscribe(generales, (value) => $generales = value);
  let email = "";
  let password = "";
  $$result.css.add(css);
  $$unsubscribe_session();
  $$unsubscribe_generales();
  return `<div class="container "><div class="row justify-content-center align-items-center container-login svelte-18g40q9"><div class="form-middle svelte-18g40q9"><form><div class="row justify-content-center"><img class="col-6"${add_attribute("src", $generales.logos.logo_negro, 0)} alt=""></div> <div class="form-group mt-3 mb-2"><label for="exampleInputEmail1" data-svelte-h="svelte-i9cnuj">Email address</label> <input required name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"${add_attribute("value", email, 0)}> </div> <div class="form-group"><label for="exampleInputPassword1" data-svelte-h="svelte-15vxuj3">Password</label> <input required name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"${add_attribute("value", password, 0)}></div> ${``} <div class="row justify-content-center mt-3"><button type="submit" ${""} class="btn btn-adcent col-4">Submit ${``}</button></div></form></div></div> </div>`;
});
export {
  Page as default
};