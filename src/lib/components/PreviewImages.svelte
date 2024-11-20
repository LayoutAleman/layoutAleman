<script>
  export  let input;
  export let show_close = true
  export let image_existing
  export let id = ''
  export let label = ''
  
  let container;
  let image;
  let placeholder;
	let showImage = true;
    
  function onChange(clear = false) {
    let file = input.files[0];
		
    if (file && !clear) {
			showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);
			
			return;
    }
		showImage = false; 
  }

 
</script>
<div class="mb-3">
    <label for="{id}" class="form-label">{label}</label>
    <div class="previewdiv {label == 'Logo Blanco'?'bg-dark':''}"  bind:this={container}>
        {#if showImage}
        {#if show_close}
        <button class="delete-img btn" on:click={()=>onChange(true)}> <i class="bi bi-x-lg"></i></button>
        {/if}
            <img bind:this={image} src="{image_existing}" alt="Preview" />
        {:else}
            <span bind:this={placeholder}></span>
        {/if}
    </div>
  <input id="{id}" class="form-control mt-2"  bind:this={input} on:change={()=>onChange(false)} type="file"/>

</div>

<style>
	.previewdiv {
        width: auto;
    max-width: 100%;
    min-height: 100px;
    border: 2px solid #ddd;
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #ccc;
    position: relative;
  }
  .previewdiv img{max-width: 100%;}
  .delete-img {
    position: absolute;
    z-index: 10;
    right: 10px;
    top: 10px;
  }
</style>