<script>
    import {Menu, Close} from '$lib/Icons'
    let menu_items = {'home':'/','reports':'/reports','logout':'/auth/api/logout'}
    let menu_open = false
</script>
<div class="sm:flex sm:flex-row sm:justify-between p-3 bg-orange-300">
    <div class="flex justify-between">
        <h1 class="font-bold text-2xl text-white">Expense</h1>
        <div on:click={()=>menu_open=!menu_open} class="block sm:hidden cursor-pointer">
            {#if menu_open}
                <Close size="2rem"/>
            {:else}
                <Menu size="2rem"/>
            {/if}
        </div>
    </div>
    <div class="{menu_open ? 'block ' : 'hidden'} sm:flex sm:space-x-10 sm:justify-end shadow-lg sm:shadow-none rounded-lg sm:rounded-none  absolute sm:relative w-full animated animate-slide-in-down sm:animate-none bg-white sm:bg-orange-300">
        {#each Object.entries(menu_items) as [key,val]}
            <a href="{val}" class="block capitalize p-2.5 sm:p-0 text-xl font-semibold text-blue-600">{key}</a>
        {/each}
    </div>
</div>