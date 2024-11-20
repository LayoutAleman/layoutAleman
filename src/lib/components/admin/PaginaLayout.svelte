<script>

    import {paginas} from '../../stores'
    import toast from 'svelte-french-toast';
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { db, storage } from "$lib/firebase.client";
    import { getDownloadURL, ref, uploadBytesResumable,uploadBytes } from "firebase/storage";
    import { onMount } from 'svelte';
    import PreviewImages from '../PreviewImages.svelte';
    
    let isLoading = false
    let file_layout
    
    onMount(()=>{
        $paginas.layout.layout_desc = $paginas.layout.layout_desc .replaceAll('<br>','\n')
      
    })

    async function save(){

        isLoading = true

        if(file_layout?.files[0]) await saveImages('image','layout/',file_layout?.files[0])

        let newp = $paginas.layout

        newp.layout_desc = newp.layout_desc.replaceAll('\n','<br>') 

        await setDoc(doc(db, "paginas", "layout"), newp);

        const docSnap = await getDoc(doc(db, "paginas", "layout"));
        $paginas.layout = docSnap.data()
        $paginas.layout.layout_desc = $paginas.layout.layout_desc .replaceAll('<br>','\n')
        toast.success("Pagina editada");
        isLoading = false
    }

    async function saveImages(name,path,file) {
        const storageRef = ref(storage, path+name);

        await uploadBytes(storageRef, file).then(async(snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                $paginas.layout.layout_img = downloadURL
            });
        });
    
    };

  
        
</script>

<div class=" admin-pagina">
    <h1>LAYOUT</h1>
    <div class="row mx-0">
        <div class="col-9">
            <form on:submit={save}>

                <div class="mb-3">
                  <label for="ejemplo_1desc" class="form-label">Descripcion</label>
                  <textarea required class="form-control"  rows="5" id="ejemplo_1desc" bind:value={$paginas.layout.layout_desc}></textarea>
                </div>

                <div class="row">
                    <div class="col-7">
                        <PreviewImages id="contacto_img" show_close = {false} bind:image_existing = {$paginas.layout.layout_img} label="Imagen contacto" bind:input = {file_layout}/>
                    </div>
                </div>
              
             

                <div class="row justify-content-end">
                    <button type="submit" class="btn btn-adcent col-3" disabled={isLoading} >Guardar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                </div>
                
              </form>
        </div>
    </div>
</div>