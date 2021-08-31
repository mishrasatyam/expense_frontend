<script>
    export let start,end     
    let date;
    function handleDateChange(){
        let [year,month] = date.split('-')
        start = new Date(year+'-'+Number(month))
        let end_date=new Date((Number(year)+1)+'-'+Number(month))
        end = end_date
        console.log(start,end)
    }
    let current_year = Number(new Date().getFullYear())
</script>

<div>
    <select class="w-50 shadow-lg rounded-lg p-2 m-2 focus:outline-none" bind:value={date} on:change={handleDateChange}>
        <option value={undefined}>Select an year</option>
        {#each Array(10) as el,i}
            <option value={(current_year-i)+'-1'}>{current_year-i}</option>  
        {/each}
    </select>
</div>
