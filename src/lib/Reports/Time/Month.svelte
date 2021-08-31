<script>
    export let start,end     
    let date;
    function handleDateChange(){
        let [year,month] = date.split('-')
        start = new Date(year+'-'+Number(month))
        let end_date=new Date(year+'-'+Number(month))
        end_date.setMonth(end_date.getMonth() + 1);
        end = end_date
    }
</script>

<div>
    <input type="month" class="w-50 shadow-lg rounded-lg p-2 m-2 focus:outline-none" bind:value={date} placeholder="Search by name" on:change={handleDateChange}>
</div>
