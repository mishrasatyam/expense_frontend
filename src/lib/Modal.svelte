<script>
    export let header="Modal Header";
    export let open = false,show_cancel_button = true
</script>
{#if open}
<div class="fixed inset-0 z-50 p-2 sm:p-20 overflow-y-auto bg-gray-500 bg-opacity-50 ">
    <div class="bg-white p-2 rounded-lg m-auto mt-20 justify-center shadow-lg animated animate-zoom-in">
      <div class="flex justify-between border-b">
        <span class="font-semibold text-xl px-2 py-1">{header}</span>
        {#if show_cancel_button}
        <span on:click={()=>open=false} class=" px-2 py-1 font-semibold">X</span>
        {/if}
      </div>
      <div class="py-4">
        <slot></slot>
      </div>  
    </div>
  </div>
{/if}  