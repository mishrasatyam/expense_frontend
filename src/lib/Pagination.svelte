<script>
    export let page_count,current_page
    $:console.log(current_page)
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();
</script>

<div class="mt-4 mb-2">
    {#each Array(page_count) as el,i}
        {#if i+1 == current_page}
            <span class="bg-gray-400 text-white p-1 mx-1 rounded-full">{i+1}</span>
        {:else}
            <span class="p-1 mx-1 rounded-lg bg-blue-400 text-white cursor-pointer" on:click={()=>{dispatch('goto_page',{page:i+1})}}>{i+1}</span>      
        {/if}
    {/each}
</div>