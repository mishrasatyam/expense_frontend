<script>
    import { goto } from '$app/navigation';
    import {api_url} from '$lib/util'
    import {createEventDispatcher} from 'svelte'
    import TabHeader from '$lib/TabHeader.svelte';
    import Category from './Category.svelte';
    import Name from './Name.svelte';

    const dispatch = createEventDispatcher()
    let search,search_list = [];
    let tab_list = [['name',Name],['category',Category]]    
    let tab_now = tab_list[0]
    
    async function searchSuggestions(){
        const url = `${api_url}/suggestions/?${tab_now[0]}=${search}`
        const res = await fetch(url,{credentials:'include'})
        if(res.status==401){
            goto('/auth/api/logout')
        }else if(res.status==200){
            search_list = await res.json()
        }
    }
    
    $:if(search){
        onSearchChange()
    }else{
        search_list = []
        dispatch('search',{url:undefined})
    }

    async function onSearchChange(){
        if(search){
            await searchSuggestions()
            dispatch('search',{url:`${api_url}/expense_list/?${tab_now[0]}=${search}`})
        }
    }
</script>
<TabHeader bind:tab_list bind:tab_now />
<svelte:component this={tab_now[1]} {search_list} bind:search/>