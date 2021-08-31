<script context="module">
    export async function load({page}){
        const path = page.path 
        return {props : {
            path
        }}
    }
</script>
<script>
    export let path
    $:path = path.replace('/auth/','')
</script>
<div class="my-40 sm:my-30 mx-2 sm:mx-80 bg-orange-300 p-4 shadow-lg rounded-lg">
    <header class="text-center p-4 font-medium text-xl capitalize">{path}</header>
    <slot/>
</div>

<!-- 
    sadly this wasn't working :(
    <style>
    :global(input) {
		/* this will apply to <body> */
		@apply shadow-lg w-full rounded-lg focus:outline-none p-3 my-2
	}
    
    :global(button) {
        @apply w-max bg-blue-500 p-2 rounded-lg mt-4 text-white focus:outline-none
    }

    :global(.error){
        @apply text-red-700 my-2 block
    }

    :global(a){
        @apply block text-blue-500 my-1.5 p-1
    }
</style> -->