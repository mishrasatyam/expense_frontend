<script>
    import TabHeader from '$lib/TabHeader.svelte';
    import Item from '$lib/Reports/Item/Main.svelte'
    import Time from '$lib/Reports/Time/Main.svelte'
    import ExpenseTable from '$lib/ExpenseTable.svelte';

    let result,current_page,page_count
    let tab_list = [['item',Item]]    
    let tab_now = tab_list[0]

    async function handleSearchEvent(event){
        const url = event.detail.url
        if(!url){
            result =current_page = page_count = undefined
            return
        }
        const res = await fetch(url,{credentials:'include'})
        const data = await res.json()
        result = data?.result
        current_page = data?.current_page
        page_count = data?.page_count
    }
</script>
<TabHeader bind:tab_list bind:tab_now />

<svelte:component this={tab_now[1]} on:search={handleSearchEvent}/>
<ExpenseTable {result} {current_page} {page_count}/>