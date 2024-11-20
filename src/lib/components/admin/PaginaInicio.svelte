<script>
    import PreviewImages from "../PreviewImages.svelte";
    import {paginas} from "../../stores"
    import {db,eliminarActual,storage} from '../../firebase.client'
    import { doc,setDoc,getDoc } from "firebase/firestore"; 
    import { onMount } from "svelte";
    import toast from 'svelte-french-toast';
    import { ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

 
    let isLoading = false
    let imgenesBorradas = []
    let file_acerca_de
    let file_video
    let files_carrusel

    onMount(()=>{
        $paginas.inicio.parrafo_acerca_de = $paginas.inicio.parrafo_acerca_de.replaceAll('<br>','\n')
    })

    async function save(){

        isLoading = true
        
        
        /*if(file_acerca_de?.files[0]) await saveImages('imagen_acerca_de','inicio/',1,file_acerca_de?.files[0])*/
        if(file_video?.files[0]) await saveImages('inicio_video','inicio/',1,file_video?.files[0])

        if(files_carrusel?.files){
            
            if(files_carrusel.files.length!=0){
                for (const file of files_carrusel.files) {
                    await saveImages(file.name,'inicio/carrusel/',2,file)
                }
                files_carrusel = undefined
            }
        }



        let newp = $paginas.inicio
   
        newp.parrafo_acerca_de = newp.parrafo_acerca_de.replaceAll('\n','<br>') 
     
    
        await setDoc(doc(db, "paginas", "inicio"), newp);
        
        const docSnap = await getDoc(doc(db, "paginas", "inicio"));
        $paginas.inicio = docSnap.data()
       
        $paginas.inicio.parrafo_acerca_de = $paginas.inicio.parrafo_acerca_de.replaceAll('<br>','\n')

        if(imgenesBorradas.length!=0) await eliminarImagenes()
        toast.success("Pagina Inicio editada");
        isLoading = false
    }

    async function saveImages(name,path,type,file) {
        const storageRef = ref(storage, path+name);

            await uploadBytes(storageRef, file).then(async(snapshot) => {
                await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                    if(type==1) $paginas.inicio.video_inicio = downloadURL
                    if(type==2) {
                        if($paginas.inicio.carrusel){
                            $paginas.inicio.carrusel = [...$paginas.inicio.carrusel,downloadURL]
                        }else{
                            $paginas.inicio.carrusel = [downloadURL]
                        }
                    }
            });
        });
       
    };


    async function removeImage(name) {
        imgenesBorradas = [...imgenesBorradas,name]
        

        let temp = []
        temp = $paginas.inicio.carrusel.filter(val=>val!=name)
         
        $paginas.inicio.carrusel = temp
        
    }

    async function eliminarImagenes() {
        
        for(let i=0;i<imgenesBorradas.length;i++){
            await eliminarActual(imgenesBorradas[i])
        }

        imgenesBorradas = []
       
    }
    
   
</script>
<div class=" admin-pagina">
    <h1>INICIO</h1>
    <div class="row mx-0">
        <div class="col-9">
            <form on:submit={save}>
                {#if $paginas?.inicio}
                    <div class="mb-2">
                        <label for="carrusel_titulo" class="form-label">Titulo carrusel</label>
                        <input required type="text" class="form-control" id="carrusel_titulo" bind:value={$paginas.inicio.titulo_carrusel }>
                    </div>

                    <div class="mb-3">

                        <label for="inicio_carrusel" class="form-label">Carrusel</label>

                        <div class="row carrusel">
                            {#if $paginas?.inicio.carrusel}
                                {#each $paginas?.inicio.carrusel as img}
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

                    <hr class="separation-line my-5">

                    <div class="mb-4">
                    <label for="inicio_desc1" class="form-label">Frase</label>
                    <textarea required class="form-control"  rows="5" id="inicio_desc1"  bind:value={$paginas.inicio.frase}></textarea>
                    </div>

                    <div class="mb-4">
                    <label for="inicio_titulo" class="form-label">Titulo acerca de</label>
                    <input required type="text" class="form-control" id="inicio_titulo" bind:value={$paginas.inicio.titulo_acerca_de }>
                    </div>

                    <div class="mb-4">
                        <label for="inicio_desc2" class="form-label">Descripcion acerca de</label>
                        <textarea required class="form-control" rows="10" id="inicio_desc2" bind:value={$paginas.inicio.parrafo_acerca_de}></textarea>
                    </div>
<!--
                    <div class="row">
                        <div class="col-6">
                            <PreviewImages id={'inicio_imagen'} show_close = {false} bind:image_existing = {$paginas.inicio.imagen_acerca_de} label="Imagen Acerca de" bind:input = {file_acerca_de}/>
                        </div>
                    </div>
-->
                    <div class="mb-4">
                        <label for="inicio_desc2" class="form-label">Video acerca de</label>
                        <div class="row mx-0">
                            <a target="_blank" href="{$paginas.inicio.video_inicio}"  class="btn-dark btn col-2 {$paginas.inicio.video_inicio?'':'disabled'}">ver video</a>
                          
                            <div class="col-7 px-0">
                                <input class="form-control " type="file" accept="video/mp4,video/x-m4v,video/*" bind:this={file_video}>
                            </div>
                            
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

