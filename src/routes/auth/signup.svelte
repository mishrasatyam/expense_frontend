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
            error = data.message
        }
    }
    </script>
    
    <form on:submit|preventDefault={handleSubmit} class="text-center">
        <input bind:value={username} placeholder="Username" class="shadow-lg w-full rounded-lg focus:outline-none p-3 my-2">
    <input bind:value={password} placeholder="Password" type="password" class="shadow-lg w-full rounded-lg focus:outline-none p-3 my-2">
    <span class="text-red-700 my-2 block">
        {#if error}
        {error}
        {/if}
    </span>
    <button type="submit" class="w-max bg-blue-500 p-2 rounded-lg mt-4 text-white focus:outline-none">Submit</button>
    <a href="/auth/login" class="block text-blue-500 my-1.5 p-1">Have an account</a>
    </form>