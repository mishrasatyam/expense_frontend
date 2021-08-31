<script>
    import {api_url} from '$lib/util'
    import {createEventDispatcher} from 'svelte'
    import TabHeader from '$lib/TabHeader.svelte';
    import Day from './Day.svelte';
    import Month from './Month.svelte';
    import Year from './Year.svelte';

    const dispatch = createEventDispatcher()
    let start,end;
    let tab_list = [['day',Day],['month',Month],['year',Year]]    
    let tab_now = tab_list[0]
    
    $:if(start && end){dispatch('search',{url:`${api_url}/expense_list/?start=${start}&end=${end}`})}
</script>
<TabHeader bind:tab_list bind:tab_now />
<svelte:component this={tab_now[1]} bind:start bind:end/>