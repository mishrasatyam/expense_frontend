<script>
    export let start,end     
    let date;
    function handleDateChange(){
        let [year,month,day] = date.split('-')
        start = new Date(year+'-'+Number(month)+'-'+Number(day))
        let end_date=new Date(year+'-'+Number(month)+'-'+Number(day))
        end_date.setDate(end_date.getDate() + 1);
        end = end_date
    }
</script>

<div>
    <input type="date" class="w-50 shadow-lg rounded-lg p-2 m-2 focus:outline-none" bind:value={date} placeholder="Search by name" on:change={handleDateChange}>
</div>
