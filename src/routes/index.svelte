<script context="module">
    import {api_url} from '$lib/util'
    export async function load({session,fetch}){
        const url = `${api_url}/expense_list/`
        const res = await fetch(url,{credentials:'include'})
        if(res.status==401){
            return {
                redirect:'/auth/api/logout',
                status:302
            }
        }
        if(res.status!=200){
            alert('Something went wrong! Try later')
            return {
                redirect:'/auth/api/logout',
                status:302
            }
        }
        const {result,current_page,page_count} = await res.json()
        return {
            props  :{
                user : session?.user,
                result,current_page,page_count            
            }
        }
    }
</script>
<script>
    export let user,result,current_page,page_count
    import AddExpense from "$lib/AddExpense.svelte";
    import ExpenseTable from "$lib/ExpenseTable.svelte";
    import { goto } from '$app/navigation';
    let show_add_expense_modal = false
    let page;
    
    async function fetch_data(){
        const url = `${api_url}/expense_list/?page=${page}`
        const res = await fetch(url,{credentials:'include'})
        if(res.status==200){
            const data = await res.json()
            result = data?.result
            current_page = data?.current_page
            page_count = data?.page_count
        }else if(res.status==401){
            goto('/auth/login')
        }

    }
</script>
<AddExpense bind:show_add_expense_modal on:expense_added={()=>{page=1;fetch_data()}}/>
<h1 class="capitalize text-center text-xl p-2 font-medium">Welcome {user?.username}</h1>
<button on:click={()=>show_add_expense_modal=true} type="button" class="bg-white text-blue-600 border-3 border-blue-600 p-2 ml-4 rounded-lg shadow-lg">Add Expense</button>

<div class="mt-4 p-3">
    <ExpenseTable {result} {page_count} {current_page} on:goto_page={(event)=>{page=event.detail.page;fetch_data()}}/>
</div>