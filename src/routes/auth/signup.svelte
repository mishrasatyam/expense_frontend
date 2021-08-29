<script>
    import { goto } from "$app/navigation"; 
    import {api_url} from '$lib/util'
    let username,password,error;

    async function handleSubmit(){
        error = undefined
        const method = 'POST'
        const url = `${api_url}/signup/`
        const body = JSON.stringify({username,password})
        const headers = {
            'Content-Type': 'application/json'
        }
        const res = await fetch(url,{method,body,headers})
        if(res.status==200){
            goto('/auth/login/')
        }else if(res.status==401){
            const data = await res.json()
            error = data.error
        }
    }
    </script>
    
    <form on:submit|preventDefault={handleSubmit} class="text-center">
        <input bind:value={username} placeholder="Username">
        <input bind:value={password} placeholder="Password" type="password">
        <span class="error">
            {#if error}
                {error}
            {/if}
        </span>
        <button type="submit">Submit</button>
        <a href="/auth/login/">Create an account</a>
    </form>