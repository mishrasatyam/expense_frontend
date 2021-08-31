<script context="module">
    export const router = false
</script>
<script>
    let username,password,error;
    async function handleSubmit(){
        error = undefined
        const method = 'post'
        const url = `/auth/api/login`
        const body = JSON.stringify({username,password})
        const headers = {'content-type':'application/json'}
        const res = await fetch(url,{method,body,headers})
        if(res.status==200){
            location.href='/'
        }else if(res.status==401){
            error = 'Invalid username or password'
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
    <a href="/auth/signup" class="block text-blue-500 my-1.5 p-1">Create an account</a>
</form>