<script>
    import {paginas} from '$lib/stores'
    import lightGallery from 'lightgallery';
     import lgThumbnail from 'lightgallery/plugins/thumbnail'
    import lgZoom from 'lightgallery/plugins/zoom'
    import { onMount } from 'svelte';
    let layout_img = $paginas?.layout?.layout_img
    let layout_desc = $paginas?.layout?.layout_desc

    onMount(()=>{
        
        lightGallery(document.getElementById('lightgallery2'), {
            plugins: [lgZoom, lgThumbnail],
            licenseKey: 'your_license_key',
            speed: 500
        });
        
    })
</script>

<div class="pagina-layout pb-3">

   

    <div class="" data-aos="fade-in" data-aos-duration="2000">
        <div class="row mx-0 scouting-p my-5 ">
            <div class="pt-sm-5 pl-0 pr-5 col-12 col-sm-6 p-relative">
                <div data-aos="fade-right" class="title title4 my-3" >
                    <hr class="ml-0"><h2>LAYOUTS</h2>
                </div>
                <p class="pl-3" data-aos="fade-in">{@html layout_desc}</p>
            </div>
            <div class="col-12 col-sm-6 p-0" data-aos="fade-up">
                <div id="lightgallery2">
                    <a data-aos="fade-in" href="{layout_img}" data-lg-size="1600-2400">
                        <img class="imagen-layout" alt="Layouts" src="{layout_img}" />
                    </a>
                </div>
                <!--
                <img src="{layout_img}" alt="">-->
            </div>
        </div>
    </div>
   

</div>

<style>
    .pagina-layout img,.imagen-layout{width: 100%;}
    .pr-5{padding-right: 6em;}
    .pagina-layout p{padding-left: 3em;}
    .pagina-layout{letter-spacing: 2px; font-weight: 300; }
</style>