<script>
    import PreviewImages from "../PreviewImages.svelte";
    import {generales} from '../../stores'
    import toast from "svelte-french-toast";
    import { collection, doc, getDocs, setDoc } from "firebase/firestore";
    import { db, eliminarActual, storage } from "$lib/firebase.client";
    import { getDownloadURL, ref,uploadBytes,deleteObject } from "firebase/storage";
    let isLoading = false
    let file_logo_negro
    let file_logo_blanco
    

    async function save(){

        isLoading = true

        if(file_logo_negro?.files[0])
        await saveImages('logo_negro','generales/',file_logo_negro?.files[0],$generales.logos.logo_negro)

        if(file_logo_blanco?.files[0])
        await saveImages('logo_blanco','generales/',file_logo_blanco?.files[0],$generales.logos.logo_blanco)

        let newp = $generales
      
        if(file_logo_negro?.files[0]||file_logo_blanco?.files[0])
            await setDoc(doc(db, "generales","logos"), newp.logos);

        await setDoc(doc(db, "generales","contacto"), newp.contacto);

        const querySnapshot2 = await getDocs(collection(db, "generales"))
        querySnapshot2.forEach((doc) => {$generales[doc.id] = doc.data();});

        toast.success("Datos generales editados");
        isLoading = false
    }

    async function saveImages(name,path,file,url_borrar) {
        const storageRef = ref(storage, path+name);

        await eliminarActual(url_borrar)

        await uploadBytes(storageRef, file).then(async(snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                $generales.logos[name] = downloadURL
            });
        });
    
    };

</script>
<div class="admin-pagina">
    <h1>GENERAL</h1>
    <div class="row mx-0">
        <div class="col-9">
            <form on:submit={save}>
                {#if $generales}
                
                <div class="mb-5">
                  <label for="general_email" class="form-label">Email</label>
                  <input required type="text" class="form-control" id="general_email" bind:value={$generales.contacto.correo}>
                </div>
             
                <div class="mb-3 row ml-">
                    <label for="general_insta" class="col-sm-2 col-form-label"> <i style="color:#5b1a79" class="bi bi-instagram"></i> Instagram</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="general_insta" bind:value={$generales.contacto.instagram}>
                    </div>
                </div>

                <div class="mb-3 row ml-">
                    <label for="general_face" class="col-sm-2 col-form-label"> <i class="bi bi-facebook" style="color:#2f60dd"></i> Facebook</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="general_face" bind:value={$generales.contacto.facebook}>
                    </div>
                </div>

                <div class="mb-3 row ml-">
                    <label for="general_whats" class="col-sm-2 col-form-label"> <i class="bi bi-whatsapp" style="color:#22d322"></i> Whatsapp</label>
                    <div class="col-sm-10">
                      <input type="tel" class="form-control" id="general_whats" bind:value={$generales.contacto.whatsapp}>
                    </div>
                </div>

                <hr class="my-5 separation-line">
                
                <div class="row">
                    <div class="col-6">
                        <PreviewImages id='general_logo-negro' show_close = {false} bind:image_existing = {$generales.logos.logo_negro} label="Logo Negro" bind:input = {file_logo_negro}/>
                    </div>
                    <div class="col-6">
                        <PreviewImages id='general_logo-blanco' show_close = {false} bind:image_existing = {$generales.logos.logo_blanco} label="Logo Blanco" bind:input = {file_logo_blanco}/>
                    </div>
                </div>

                
                  
                <div class="row justify-content-end">
                    <button  type="submit" class="btn btn-adcent col-3" disabled={isLoading} >Guardar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                </div>
                {/if}
            </form>
        </div>
    </div>
</div>

