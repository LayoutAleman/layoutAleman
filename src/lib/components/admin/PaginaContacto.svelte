<script>
    import PreviewImages from "../PreviewImages.svelte";
    import {paginas} from "../../stores"
    import {db,eliminarActual,storage} from '../../firebase.client'
    import { doc,setDoc,getDoc } from "firebase/firestore"; 
    import toast from 'svelte-french-toast';
    import { ref, getDownloadURL, deleteObject,uploadBytes } from "firebase/storage";

    let isLoading = false
    let file_contacto
    async function save(){

        isLoading = true

        if(file_contacto?.files[0]) await saveImages('imagen_contacto','contacto/',file_contacto?.files[0])
      
        let newp = $paginas.contacto

        await setDoc(doc(db, "paginas", "contacto"), newp);

        const docSnap = await getDoc(doc(db, "paginas", "contacto"));
        $paginas.contacto = docSnap.data()

        toast.success("Pagina Contacto editada");
        isLoading = false
    }

    async function saveImages(name,path,file) {
        const storageRef = ref(storage, path+name);
        
        await eliminarActual($paginas.contacto.imagen_contacto)

        await uploadBytes(storageRef, file).then(async(snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                $paginas.contacto.imagen_contacto = downloadURL
            });
        });
    
    };

  

</script>
<div class=" admin-pagina">
    <h1>CONTACTO</h1>
    <div class="row mx-0">
        <div class="col-9">
            <form on:submit={save}>
                {#if $paginas?.contacto}
                
                    <div class="mb-3">
                        <label for="contacto_desc" class="form-label">Descripcion</label>
                        <textarea required class="form-control" rows="3" id="contacto_desc" bind:value={$paginas.contacto.descripcion}></textarea>
                    </div>

                    <div class="row">
                        <div class="col-7">
                            <PreviewImages id="contacto_img" show_close = {false} bind:image_existing = {$paginas.contacto.imagen_contacto} label="Imagen contacto" bind:input = {file_contacto}/>
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