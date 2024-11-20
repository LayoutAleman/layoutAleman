<script>
    import { onMount } from 'svelte';
    import {proyectos} from '../../stores'
    import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
    import { db, eliminarActual, storage } from '$lib/firebase.client';
    import toast from 'svelte-french-toast';
    import PreviewImages from '../PreviewImages.svelte';
    import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';

    let isLoading = false
    let x = []
    let addnombre = ''
    let ver_proyecto = null
    let file_portada
    let idEditar = ''
    let files_galeria
    let imgenesBorradas = []
    let isLoading2 = false
    let eliminar

    onMount(()=>{
        
        if($proyectos.length==0) getProjects()
    })

    async function getProjects() {
        x = []
        const querySnapshot = await getDocs(collection(db, "proyectos"))
        querySnapshot.forEach((doc) => {x = [...x,{...doc.data(),id:doc.id}];});
        $proyectos = x
    }

    async function deleteProyect() {
        isLoading2 = true
        await deleteDoc(doc(db, "proyectos", eliminar?.id));
        x  = $proyectos.filter(val=>val.id!=eliminar?.id)
        $proyectos = x
   
        document.getElementById("closeeliminarModal")?.click()
        toast.success('Proyecto Eliminado')
        isLoading2 = false
    }

    async function addProyect() {
        isLoading = true
        await addDoc(collection(db, "proyectos"), {nombre:addnombre});
        addnombre = ''
       
        await getProjects()
        document.getElementById("closeAddModal")?.click()

        toast.success('Proyecto Añadido')
        isLoading = false
    }

    async function saveImages(name,path,file,type) {
        const storageRef = ref(storage, path+name);

        if(type==1) {
            if(ver_proyecto.imagen_portada) await eliminarActual(ver_proyecto.imagen_portada )
        }

        await uploadBytes(storageRef, file).then(async(snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                if(type==1) ver_proyecto.imagen_portada = downloadURL
                if(type==2){
                    if(ver_proyecto.galeria) ver_proyecto.galeria = [...ver_proyecto.galeria,downloadURL]
                    else ver_proyecto.galeria = [downloadURL]
                }
            });
        });
    
    };


    
    async function save(){

        isLoading = true
      
        if(file_portada?.files[0]) await saveImages('imagen_portada',`proyectos/${idEditar}/`,file_portada?.files[0],1)
     
        if(files_galeria?.files){
            
            if(files_galeria.files.length!=0){
                for (const file of files_galeria.files) {
                    await saveImages(file.name,'proyectos/'+idEditar+'/galeria/',file,2)
                }
                files_galeria = null
            }
        }


        let proyecto = ver_proyecto
        await setDoc(doc(db, "proyectos", idEditar), proyecto);

        
        const docSnap = await getDoc(doc(db, "proyectos", idEditar));
        ver_proyecto = docSnap.data()

        await getProjects()
        if(imgenesBorradas.length!=0) await eliminarImagenes()
        toast.success("Proyecto editado");
        isLoading = false
        
     
    }

        

    async function removeImage(name) {
        imgenesBorradas = [...imgenesBorradas,name]
        let temp = []
        temp = ver_proyecto.galeria.filter(val=>val!=name)
        ver_proyecto.galeria = temp
        
    }

    async function eliminarImagenes() {
        
        for(let i=0;i<imgenesBorradas.length;i++){
            await eliminarActual(imgenesBorradas[i])
        }
        
        imgenesBorradas = [];
       
    }

</script>

<div class=" admin-pagina">

    <h1 class="col-5">PROYECTOS </h1>
   
    {#if ver_proyecto}
        <div class="row mx-0">
            <div class="col-9">
                <form on:submit={save}>
                <h1>
                    <button on:click={()=>{ver_proyecto = null;file_portada=null;imgenesBorradas=[]}} class="btn text-center"><i class="bi bi-backspace"></i></button>
                    {ver_proyecto.nombre}
                </h1>

                <div class="mb-3">
                    <label for="proyecto_nombre" class="form-label">Nombre de proyecto</label>
                    <input required type="text" class="form-control" id="proyecto_nombre" bind:value={ver_proyecto.nombre }>
                </div>

                <div class="mb-3">
                    <label for="proyecto_desc" class="form-label">Descripcion</label>
                    <textarea class="form-control" rows="5" id="proyecto_desc" bind:value={ver_proyecto.descripcion}></textarea>
                </div>


                <PreviewImages id="proyecto_portada" show_close = {false} bind:image_existing = {ver_proyecto.imagen_portada} label="Portada" bind:input = {file_portada}/>
                
                <hr class="separation-line my-5">

                <div class="mb-3">
                    <label for="proyecto_galeria" class="form-label">Galeria</label>
                    <div class="row carrusel">
                        {#if ver_proyecto.galeria}
                            {#each ver_proyecto.galeria as img}
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

                <div class="mb-4">
                    <label for="proyecto_galeria" class="form-label">Añadir imagenes</label>
                    <div class="d-flex">
                        <input multiple bind:this={files_galeria} type="file" class="form-control col-7" style="width: auto;" id="proyecto_galeria">
                    </div>
                </div>

                <div class="mb-4">
                    <label for="ejemplo_4src" class="form-label">SRC Vista 360</label>
                    <input type="text" class="form-control" id="ejemplo_4src" bind:value={ver_proyecto.vista360_src}>
                </div>

                <div class="mb-3 row ml-">
                    <label for="proyecto_pos" class="col-sm-1 col-form-label">Pos:</label>
                    <div class="col-sm-2">
                      <input type="number" class="form-control" id="proyecto_pos" bind:value={ver_proyecto.pos}>
                    </div>
                </div>

                <div class="row justify-content-end">
                    <button  type="submit" class="btn btn-adcent col-3" disabled={isLoading} >Guardar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                </div>
            </form>
            </div>
        </div>
    {:else}
    <div class="row mx-0">
        <div class="col-9">
            <div class="row justify-content-end mb-3">
                <button data-bs-toggle="modal" data-bs-target="#addProyectoModal" class="btn btn-adcent text-right col-3 text-center">Nuevo proyecto <i class="bi bi-plus-lg"></i></button>
            </div>
            
            <table class="table table-hover table-projects">
                
               <tbody>

                    {#if $proyectos.length==0}
                    <tr>
                        <td colspan="2" class="text-center"><small>No hay proyectos</small></td>
                    </tr>
                    {:else}
                        {#each $proyectos as _proyecto}
                            <tr>
                                <td><a href="" on:click={()=>{idEditar=_proyecto.id;ver_proyecto = _proyecto}}>{_proyecto.nombre}</a></td>
                                <td class="text-right">
                                    <div class="btn-row">
                                        <button class="btn text-secondary p-1" on:click={()=>{idEditar=_proyecto.id;ver_proyecto = _proyecto}}><i class="bi bi-eye "></i></button>

                                        <button class="btn text-danger p-1" data-bs-toggle="modal" data-bs-target="#deleteProyectoModal" on:click={()=>eliminar = _proyecto}><i class="bi bi-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    {/if}
               </tbody>
                
            </table>
        </div>
    </div>
    {/if}
</div>

<div class="modal fade" id="addProyectoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Añadir proyecto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form on:submit={addProyect}>
            <div class="modal-body">
                    <div class="mb-3 row ml-">
                        <label for="proyecto_add" class="col-sm-2 col-form-label" >Nombre</label>
                        <div class="col-sm-10">
                        <input required type="text" class="form-control" id="proyecto_add" bind:value={addnombre}>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeAddModal">Cerrar</button>
                <button disabled={isLoading} type="submit" class="btn btn-adcent">Guardar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
            </div>
        </form>
      </div>
    </div>
</div>

<div class="modal fade" id="deleteProyectoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Eliminar proyecto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div class="modal-body">
                <p class="text-center mb-1">¿Seguro que quieres eliminar el proyecto <b>"{eliminar?.nombre}"</b>?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeeliminarModal">Cerrar</button>
                <button disabled={isLoading2} on:click={deleteProyect} type="button" class="btn btn-danger">Eliminar {#if isLoading2}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
            </div>
      </div>
    </div>
</div>

<style>
    .table-projects{font-size: 16px;}
    .table-projects i {font-size: 20px;}
    .btn-row{display: flex; justify-content: end;}
</style>