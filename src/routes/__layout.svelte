<script context="module">
    export async function load({session}){
        if(!session?.user){ 
            return {
                redirect : '/auth/login/',
                status:302
            }
        }
        return {
            props  :{
                user : session?.user
            }
        }
    }
</script>
<script>
    import 'virtual:windi.css'
    import TopBar from '$lib/Layout/TopBar.svelte';
</script>
<TopBar/>
<div class="p-3">
<slot/>
</div>