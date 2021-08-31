<script>
    export let search,search_list =[]     
</script>

<div>
    <input list="list" class="w-50 shadow-lg rounded-lg p-2 m-2 focus:outline-none" bind:value={search} placeholder="Search by name">
    <datalist id="list">
        {#each search_list as el}
            <option value="{el.name}">{el.name}</option>
        {/each}
    </datalist>
</div>
