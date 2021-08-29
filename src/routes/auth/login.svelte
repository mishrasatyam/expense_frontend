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
    <input bind:value={username} placeholder="Username">
    <input bind:value={password} placeholder="Password" type="password">
    <span class="error">
        {#if error}
        {error}
        {/if}
    </span>
    <button type="submit">Submit</button>
    <a href="/auth/signup">Create an account</a>
</form>