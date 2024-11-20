<script>
    import {generales,paginas} from '../../lib/stores'
    import { enhance } from '$app/forms';
    import toast from 'svelte-french-toast';

	/** @type {import('./$types').ActionData} */
	export let form;
    let isLoading = false
</script>
<div class="page-contacto">
    <div class="title pt-5" data-aos="fade-right">
        <hr><h2>CONTÁCTANOS</h2>
    </div>

    <div class="container mt-5 pb-5">
        <div class="row justify-content-between align-items-center">
            <div class="col-sm-6 col-12" data-aos="fade-right">
                <div class="contact-form">
                    <p>{$paginas.contacto.descripcion}</p><br>
                    <form method="POST" on:submit={()=>isLoading=true} use:enhance={() => {
                        return async ({ result,update }) => {
                            update({ reset: true })
                            if (result.data.success === true) {
                                toast.success("Gracias por tu mensaje, nos comunicaremos pronto contigo");
                            }else{
                                toast.error("Hubo un problema, intentalo mas tarde");
                            }
                            isLoading = false
                        };
                    }} >
                        <div class="form-group">
                            <label class="contact-label" for="exampleInputEmail1">Email address</label>
                            <input required name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" >
                            <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                          </div>
                          <div class="form-group my-3">
                            <label class="contact-label"  for="exampleInputPassword1">Telefono</label>
                            <input required name="phone" type="phone" class="form-control" id="exampleInputPassword1">
                          </div>
                          <div class="form-group ">
                            <label class="contact-label"  for="message">Déjanos un mensaje...</label>
                            <textarea required name="mensaje" class="form-control" id="message"></textarea>
                          </div>
                          <input type="hidden" value="{$generales?.contacto?.correo}" name="correo_layout">
                          <input type="hidden" value="{$generales.logos.logo_blanco}" name="logo">
                          <div class="button-submit_container">

                            <button  type="submit" disabled={isLoading} class="btn btn-adcent mb-2">Enviar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                          </div>
                    </form>
                </div>
            </div>
            <div class="col-sm-5 col-12" data-aos="fade-left">
                <img class="max-width_100 box-shadow" src="{$paginas.contacto.imagen_contacto}" alt="">
                <div class="text-right mt-2">
                    <a class="email_to" href="mailto:{$generales.contacto.correo}"><i class="bi bi-envelope-at"></i> {$generales.contacto.correo}</a>
                </div>
            </div>
        </div>

        
    </div>
    
</div>

<style>
    .contact-form{margin-right: 10%;}
    .page-contacto{background-color: #f9f9f9}
    .contact-label{margin-bottom: 5px;}
    .button-submit_container{display: flex;width: 100%; justify-content: end; margin-top: 1.5em;}
    
    .email_to:hover{color: rgba(0, 0, 0, 0.561);}
</style>