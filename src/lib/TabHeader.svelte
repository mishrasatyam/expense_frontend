<script>
    export let tab_list,tab_now;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>
<div class="mx-1 my-2 shadow-lg rounded-lg w-max flex space-x-3 bg-white capitalize">
    {#each tab_list as el}
        {#if tab_now==el}
            <h4 class="p-4 font-bold ">{el[0]}</h4>
        {:else}
            <h4 on:click={()=>{tab_now=el;dispatch('tab_click')}} class="text-blue-500 p-4 ">{el[0]}</h4>               
        {/if}
        <hr> 
    {/each}
</div>