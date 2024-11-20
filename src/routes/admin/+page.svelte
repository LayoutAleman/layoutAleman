<script>
    import {generales} from '../../lib/stores'
    import { session } from '$lib/session';

	import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    let error = ''
    let email = '';
	let password = '';
    let isLoading = false

    onMount(()=>{
        getAuth().onAuthStateChanged(function(user) {
           
           if (user) {
           goto('/admin/home')
           }
       });

        if(localStorage.getItem("LytAleman_email")){
            email = localStorage.getItem("LytAleman_email")
            
        }
    })
    async function loginWithMail() {
        isLoading = true
        error = ''
		await signInWithEmailAndPassword(getAuth(), email, password)
			.then((result) => {
				const { user } = result;
				session.set({
					loggedIn: true,
					user: {
						displayName: user?.displayName,
						email: user?.email,
						photoURL: user?.photoURL,
						uid: user?.uid
					}
				});
                localStorage.setItem("LytAleman_email", email);
                localStorage.setItem("LytAleman", JSON.stringify($session));
           
				goto('/admin/home');
			})
			.catch((err) => {
                error = err.code
				return err;
			});
            isLoading = false
	}

    
</script>

<div class="container ">
    <div class="row justify-content-center align-items-center container-login">
        <div class="form-middle">
            <form on:submit={loginWithMail}>
                <div class="row justify-content-center">
                <img class="col-6" src="{$generales.logos.logo_negro}" alt="">
            </div>
                <div class="form-group mt-3 mb-2">
                  <label for="exampleInputEmail1">Email address</label>
                  <input required name='email' bind:value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                 <!-- -->
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input required name='password' bind:value={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                {#if error}<small id="emailHelp" class="form-text text-danger">{error}</small>{/if}
                <div class="row justify-content-center mt-3">
                    <button type="submit" disabled={isLoading} class="btn btn-adcent col-4" >Submit {#if isLoading}<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
                    
                </div>
                
              </form>
        </div>
    </div>
   
</div>

<style>
    .form-middle{max-width: 300px;}
    .container-login{height: 80vh;}
</style>