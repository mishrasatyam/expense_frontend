<script>
    import TabHeader from '$lib/TabHeader.svelte';
    import Item from '$lib/Reports/Item/Main.svelte'
    import Time from '$lib/Reports/Time/Main.svelte'
    import ExpenseTable from '$lib/ExpenseTable.svelte';
import { goto } from '$app/navigation';

    let result,current_page,page_count
    let tab_list = [['item',Item],['time',Time]]    
    let tab_now = tab_list[0]

    async function handleSearchEvent(event){
        const url = event.detail.url
        if(!url){
            result =current_page = page_count = undefined
            return
        }
        const res = await fetch(url,{credentials:'include'})
        if(res.status==401){
            goto('/auth/api/logout')
            return
        }
        const data = await res.json()
        result = data?.result
        current_page = data?.current_page
        page_count = data?.page_count
    }
</script>
<TabHeader bind:tab_list bind:tab_now on:tab_click={()=>{result = current_page = page_count = undefined}}/>

<svelte:component this={tab_now[1]} on:search={handleSearchEvent}/>
<ExpenseTable {result} {current_page} {page_count}/>