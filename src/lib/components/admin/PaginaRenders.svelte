<script>

    import {paginas} from '../../stores'
    import toast from 'svelte-french-toast';
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { db, storage } from "$lib/firebase.client";
    import { getDownloadURL, ref, uploadBytesResumable,uploadBytes } from "firebase/storage";
    import { onMount } from 'svelte';
    import PreviewImages from '../PreviewImages.svelte';
    
    let isLoading = false
    let file_vr
    let imgenesBorradas = []
    let files_carrusel

    onMount(()=>{
      
        $paginas.renders.desc_1 = $paginas.renders.desc_1 .replaceAll('<br>','\n')
        $paginas.renders.desc_2 = $paginas.renders.desc_2 .replaceAll('<br>','\n')
    })

    async function save(){

        isLoading = true

        if(file_vr?.files[0]) await saveImages('vr_image','renders/',1,file_vr?.files[0])
        if(files_carrusel?.files){
            
            if(files_carrusel.files.length!=0){
                for (const file of files_carrusel.files) {
                    await saveImages(file.name,'renders/carrusel/',2,file)
                }
                files_carrusel = undefined
            }
        }

        let newp = $paginas.renders

        newp.desc_1 = newp.desc_1.replaceAll('\n','<br>') 
        newp.desc_2 = newp.desc_2.replaceAll('\n','<br>') 
        await setDoc(doc(db, "paginas", "renders"), newp);

        const docSnap = await getDoc(doc(db, "paginas", "renders"));
        $paginas.renders = docSnap.data()
        $paginas.renders.desc_1 = $paginas.renders.desc_1 .replaceAll('<br>','\n')
        $paginas.renders.desc_2 = $paginas.renders.desc_2 .replaceAll('<br>','\n')
        toast.success("Pagina editada");
        isLoading = false
    }

    async function saveImages(name,path,type,file) {
        const storageRef = ref(storage, path+name);

        await uploadBytes(storageRef, file).then(async(snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                if(type==1)$paginas.renders.img_vr = downloadURL
                if(type==2) {
                        if($paginas.renders.carrusel){
                            $paginas.renders.carrusel = [...$paginas.renders.carrusel,downloadURL]
                        }else{
                            $paginas.renders.carrusel = [downloadURL]
                        }
                    }
            });
        });
    
    };

    async function removeImage(name) {
        imgenesBorradas = [...imgenesBorradas,name]
        

        let temp = []
        temp = $paginas.renders.carrusel.filter(val=>val!=name)
         
        $paginas.renders.carrusel = temp
        
    }
        
</script>

<div class=" admin-pagina">
    <h1>RENDERS Y 360</h1>
    <div class="row mx-0">
        <div class="col-9">
            <form on:submit={save}>

                <div class="mb-3">

                    <label for="inicio_carrusel" class="form-label">Carrusel</label>

                    <div class="row carrusel">
                        {#if $paginas?.renders.carrusel}
                            {#each $paginas?.renders.carrusel as img}
                                <div class="col-3 carrusel-item">
                                    <button type="button" on:click={()=>removeImage(img)} class="btn btn-carousel"><i class="bi bi-x-lg"></i></button>
                                    <img src="{img}" alt="">
                                </div>
                            {/each}
                        {:else}
                            <div class="col-12 text-center text-secondary"><small>(Vacio)</small></div>
                        {/if}
                    </div>
                    
                </div>

                <div class="mb-3">
                    <label for="inicio_carrusel" class="col-sm-2 col-form-label">Añadir imagenes</label>
                    <div class="col-sm-10">
                        <input multiple bind:this={files_carrusel} type="file" class="form-control col-7" style="width: auto;" id="inicio_carrusel">
                    </div>
                </div>

                
                <div class="mb-3">
                  <label for="render_desc1" class="form-label">Descripcion renders</label>
                  <textarea required class="form-control"  rows="5" id="render_desc1" bind:value={$paginas.renders.desc_1}></textarea>
                </div>

                <hr class="separation-line my-5">


                <div class="mb-3">
                    <label for="ejemplo_4src" class="form-label">SRC Vista 360</label>
                    <input required type="text" class="form-control" id="ejemplo_4src" bind:value={$paginas.renders.vista360_src}>
                </div>

                <div class="mb-3">
                    <label for="render_desc2" class="form-label">Descripcion 360</label>
                    <textarea required class="form-control"  rows="5" id="render_desc2" bind:value={$paginas.renders.desc_2}></textarea>
                  </div>

                <div class="row">
                    <div class="col-7">
                        <PreviewImages id="VR_img" show_close = {false} bind:image_existing = {$paginas.renders.img_vr} label="Imager VR" bind:input = {file_vr}/>
                    </div>
                </div>
              
             

                <div class="row justify-content-end">
                    <button type="submit" class="btn btn-adcent col-3" disabled={isLoading} >Guardar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                </div>
                
              </form>
        </div>
    </div>
</div>