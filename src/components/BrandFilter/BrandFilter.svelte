<script lang="ts">
import { checkedBrandName  } from "../ProductCard/stores";
export let title:string;
export let selectedBrands:any;

let selectedCheckbox:string[] = [];

$:{checkedBrandName.update((checkedBrands) => {
    checkedBrands = selectedCheckbox;
    return checkedBrands;
});}
// $:{console.log("checkedBrands",$checkedBrandName);}
</script>

<div class=" bg-gradient-to-b h-auto sticky top-4">
    <div class="flex flex-col px-5 py-4 w-[260px] h-fit">
      <h2 class="text-2xl font-semibold w-fit px-3 mb-3">{title}</h2>
      <div class="flex flex-col">
      {#if selectedBrands !==undefined && selectedBrands.length > 0}
      {#each selectedBrands as selectedbrand,index}
        <label class="text-blue-950 px-3 flex items-center gap-5">
          <input type="checkbox" class="w-4 h-4" name="brand" bind:group={selectedCheckbox} value={selectedbrand.brand.id}/>
          <span class="text-lg py-1">{selectedbrand?.brand?.value?.data?.brandName}</span>
        </label>
      {/each}
    {/if}
    </div>
    <button class="mt-3 bg-slate-300 py-2" on:click={() => selectedCheckbox = []}>Clear Filter</button>
  </div>
  </div>