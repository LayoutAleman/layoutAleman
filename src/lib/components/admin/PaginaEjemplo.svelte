<script>
    import PreviewImages from "../PreviewImages.svelte";
    import {paginas} from '../../stores'
    import toast from 'svelte-french-toast';
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { db, storage } from "$lib/firebase.client";
    import { getDownloadURL, ref, uploadBytesResumable,uploadBytes } from "firebase/storage";
    
    let isLoading = false
    let file_scouting_img
    let file_render_img
    let file_layout_img

    async function save(){

        isLoading = true

        if(file_scouting_img?.files[0]) await saveImages('scouting_img','pagina2/',file_scouting_img?.files[0])

        if(file_layout_img?.files[0]) await saveImages('layout_img','pagina2/',file_layout_img?.files[0])

        if(file_render_img?.files[0]) await saveImages('render_img','pagina2/',file_render_img?.files[0])

        let newp = $paginas.pagina2

        await setDoc(doc(db, "paginas", "pagina2"), newp);

        const docSnap = await getDoc(doc(db, "paginas", "pagina2"));
        $paginas.pagina2 = docSnap.data()

        toast.success("Pagina editada");
        isLoading = false
    }

    async function saveImages(name,path,file) {
        const storageRef = ref(storage, path+name);

        await uploadBytes(storageRef, file).then(async(snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                $paginas.pagina2[name] = downloadURL
            });
        });
    
    };

  
        
</script>

<div class=" admin-pagina">
    <h1>SERVICIOS</h1>
    <div class="row mx-0">
        <div class="col-9">
            <form on:submit={save}>

                <div class="mb-3">
                  <label for="ejemplo_1desc" class="form-label">Descripcion Scouting</label>
                  <textarea required class="form-control"  rows="5" id="ejemplo_1desc" bind:value={$paginas.pagina2.scouting_desc}></textarea>
                </div>
                
                <div class="row">
                    <div class="col-7">
                        <PreviewImages id="ejemplo_1img" label='Imagen Scouting' show_close = {false} bind:image_existing = {$paginas.pagina2.scouting_img} bind:input = {file_scouting_img}/>
                    </div>
                </div>

                <hr class="separation-line my-5">
                
                <div class="mb-3">
                    <label for="ejemplo_2desc" class="form-label">Descripcion Layout</label>
                    <textarea required class="form-control" rows="5" id="ejemplo_2desc" bind:value={$paginas.pagina2.layout_desc}></textarea>
                </div>
                
                <div class="row">
                    <div class="col-7">
                        <PreviewImages id="ejemplo_2img" label='Imagen Layout' show_close = {false} bind:image_existing = {$paginas.pagina2.layout_img} bind:input = {file_layout_img}/>
                    </div>
                </div>
        
                <hr class="separation-line my-5">

                <div class="mb-3">
                    <label for="ejemplo_3desc" class="form-label">Descripcion Render</label>
                    <textarea required class="form-control" rows="5" id="ejemplo_3desc" bind:value={$paginas.pagina2.render_desc}></textarea>
                </div>
          
                <div class="row">
                    <div class="col-7">
                        <PreviewImages id="ejemplo_3img" label='Imagen Render' show_close = {false} bind:image_existing = {$paginas.pagina2.render_img} bind:input = {file_render_img}/>
                    </div>
                </div>
                
                <!--
     
                <hr class="separation-line my-5">

                <div class="mb-3">
                    <label for="ejemplo_4desc" class="form-label">Descripcion Vista 360 </label>
                    <textarea required class="form-control" rows="5" id="ejemplo_4desc" bind:value={$paginas.pagina2.vista360_desc}></textarea>
                </div>

                <div class="mb-3">
                    <label for="ejemplo_4src" class="form-label">SRC Vista 360</label>
                    <input required type="text" class="form-control" id="ejemplo_4src" bind:value={$paginas.pagina2.vista360_src}>
                </div>
-->
                <div class="row justify-content-end">
                    <button type="submit" class="btn btn-adcent col-3" disabled={isLoading} >Guardar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                </div>
                
              </form>
        </div>
    </div>
</div>

