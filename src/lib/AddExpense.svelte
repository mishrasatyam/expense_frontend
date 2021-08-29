<script>
    import confetti from 'canvas-confetti'
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    import {api_url} from '$lib/util'
    import Modal from '$lib/Modal.svelte'
    let name,cost=null,category;
    let error;
    let i
    export let show_add_expense_modal = false
    let show_success_msz = false
    async function handleSubmit(){
        i=undefined
        if(cost==null || cost<0.01){
            error = 'Cost should be greater than 0!'
            return
        }
        error = undefined
        const method = 'POST'
        // const url = `/api/save_expense`
        const url = `${api_url}/save_expense/`
        const headers = {'content-type':'application/json'}
        const body = JSON.stringify({name,cost,category})
        const res = await fetch(url,{method,headers,body,credentials:'include'})
        console.log(res.status)        
        if(res.status==200){
            show_success_msz = true
            dispatch('expense_added')
            confetti({ particleCount: 1000,spread: 180})
            i=3    
            setInterval(()=>{
                i-=1
                if(i==0){
                    show_add_expense_modal = false
                    show_success_msz = false
                }
            },1000)
        }else{
            const data = await res.json()
            error = data.error
        }
    }
</script>

<Modal bind:open={show_add_expense_modal} show_cancel_button={true} header="Add Expense">
    {#if show_success_msz}
        <h2 class="text-center p-3">Expense added for {cost}, redirecting in {i} seconds!</h2>
    {:else}
        <form class="text-center" on:submit|preventDefault={handleSubmit}>
            <input bind:value={name} placeholder="Name" required>
            <input bind:value={cost} min="0" step="0.01" placeholder="Cost" type="number" required>
            <input bind:value={category} placeholder="Category" required>
            <span class="text-red-500 my-1">
                {#if error}
                {error}
                {/if}
            </span>
            <button type="submit">Submit</button>
        </form>
    {/if}
</Modal>
<style>
    input { 
		/* this will apply to <body> */
		@apply shadow-lg w-full rounded-lg focus:outline-none p-3 my-2
	}
    
    button{
        @apply w-max bg-blue-500 p-2 rounded-lg mt-4 text-white focus:outline-none
    }

    :global(.error){
        @apply text-red-700 my-2 block
    }

</style>