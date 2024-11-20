<script>

    import {paginas} from '../../stores'
    import toast from 'svelte-french-toast';
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { db, storage } from "$lib/firebase.client";
    import { getDownloadURL, ref, uploadBytesResumable,uploadBytes } from "firebase/storage";
    import { onMount } from 'svelte';
    
    let isLoading = false
    let file_video_1
    let file_video_2
    let file_video_3

    onMount(()=>{
        $paginas.scouting.desc_1 = $paginas.scouting.desc_1 .replaceAll('<br>','\n')
        $paginas.scouting.desc_2 = $paginas.scouting.desc_2 .replaceAll('<br>','\n')
        $paginas.scouting.desc_3 = $paginas.scouting.desc_3 .replaceAll('<br>','\n')
    })

    async function save(){

        isLoading = true

        if(file_video_1?.files[0]) await saveImages('video_1','scouting/',file_video_1?.files[0])

        if(file_video_2?.files[0]) await saveImages('video_2','scouting/',file_video_2?.files[0])

        if(file_video_3?.files[0]) await saveImages('video_3','scouting/',file_video_3?.files[0])

        let newp = $paginas.scouting

        newp.desc_1 = newp.desc_1.replaceAll('\n','<br>') 
        newp.desc_2 = newp.desc_2.replaceAll('\n','<br>') 
        newp.desc_3 = newp.desc_3.replaceAll('\n','<br>') 

        await setDoc(doc(db, "paginas", "scouting"), newp);

        const docSnap = await getDoc(doc(db, "paginas", "scouting"));
        $paginas.scouting = docSnap.data()

        $paginas.scouting.desc_1 = $paginas.scouting.desc_1 .replaceAll('<br>','\n')
        $paginas.scouting.desc_2 = $paginas.scouting.desc_2 .replaceAll('<br>','\n')
        $paginas.scouting.desc_3 = $paginas.scouting.desc_3 .replaceAll('<br>','\n')
        
        toast.success("Pagina editada");
        isLoading = false
    }

    async function saveImages(name,path,file) {
        const storageRef = ref(storage, path+name);

        await uploadBytes(storageRef, file).then(async(snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                $paginas.scouting[name] = downloadURL
            });
        });
    
    };

  
        
</script>

<div class=" admin-pagina">
    <h1>SCOUTING</h1>
    <div class="row mx-0">
        <div class="col-9">
            <form on:submit={save}>

                <div class="mb-3">
                  <label for="ejemplo_1desc" class="form-label">Descripcion 1</label>
                  <textarea required class="form-control"  rows="5" id="ejemplo_1desc" bind:value={$paginas.scouting.desc_1}></textarea>
                </div>

                <div class="mb-4">
                    <label for="inicio_desc2" class="form-label">Video 1</label>
                    <div class="row mx-0">
                        <a target="_blank" href="{$paginas.scouting.video_1}"  class="btn-dark btn col-2 {$paginas.scouting.video_1?'':'disabled'}">ver video</a>
                        <div class="col-7 px-0">
                            <input class="form-control " type="file" accept="video/mp4,video/x-m4v,video/*" bind:this={file_video_1}>
                        </div>
                    </div>
                </div>
              
                <hr class="separation-line my-5">

                <div class="mb-3">
                    <label for="ejemplo_1desc" class="form-label">Descripcion 2</label>
                    <textarea required class="form-control"  rows="5" id="ejemplo_1desc" bind:value={$paginas.scouting.desc_2}></textarea>
                </div>

                <div class="mb-4">
                    <label for="inicio_desc2" class="form-label">Video 2</label>
                    <div class="row mx-0">
                        <a target="_blank" href="{$paginas.scouting.video_2}"  class="btn-dark btn col-2 {$paginas.scouting.video_2?'':'disabled'}">ver video</a>
                        <div class="col-7 px-0">
                            <input class="form-control " type="file" accept="video/mp4,video/x-m4v,video/*" bind:this={file_video_2}>
                        </div>
                    </div>
                </div>

                <hr class="separation-line my-5">

                <div class="mb-3">
                    <label for="ejemplo_1desc" class="form-label">Descripcion 3</label>
                    <textarea required class="form-control"  rows="5" id="ejemplo_1desc" bind:value={$paginas.scouting.desc_3}></textarea>
                </div>  

                <div class="mb-4">
                    <label for="inicio_desc2" class="form-label">Video 3</label>
                    <div class="row mx-0">
                        <a target="_blank" href="{$paginas.scouting.video_3}"  class="btn-dark btn col-2 {$paginas.scouting.video_3?'':'disabled'}">ver video</a>
                        <div class="col-7 px-0">
                            <input class="form-control " type="file" accept="video/mp4,video/x-m4v,video/*" bind:this={file_video_3}>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-end">
                    <button type="submit" class="btn btn-adcent col-3" disabled={isLoading} >Guardar {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                </div>
                
              </form>
        </div>
    </div>
</div>