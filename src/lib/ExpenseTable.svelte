<script>
    import Pagination from "./Pagination.svelte";
    import {createEventDispatcher} from 'svelte'
    export let result,page_count,current_page;
    let table_row = [{name:'Name',th_class:'w-1/3',property:'name'},
    {name:'Cost',th_class:'w-1/3',property:'cost'},
    {name:'Category',th_class:'w-1/3',property:'category'}]

    const dispatch = createEventDispatcher();
    function handlePageChange(event){
        dispatch('goto_page',{page:event.detail.page})
    }
</script>

{#if result?.length>0}
    <table class="table-fixed w-full">
        <thead class="bg-blue-500 text-white">
            <tr class="border">
            {#each table_row as el}
                <th class="p-2 {el.th_class} border-r text-left">{el.name}</th>
            {/each}
            </tr>
        </thead>
        <tbody class="bg-orange-100">
            {#each result as res}
                <tr class="border">
                    {#each table_row as el}
                        <td class="p-2 border-r">{res[el.property]}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
    <div>
        <Pagination {page_count} {current_page} on:goto_page={handlePageChange}/>
    </div>
{/if}