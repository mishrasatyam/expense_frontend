<script context="module">
    export async function load({session}){
        console.log(session)
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
    export let user
</script>
<h1>{user?.username}</h1>
<a href="/auth/api/logout">Logout</a>
<slot/>