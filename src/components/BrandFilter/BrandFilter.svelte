<script lang="ts">
import { checkedBrandName  } from "../ProductCard/stores";
export let title:string;
export let selectedBrands:any;
console.log(selectedBrands);

function handleRadioClick(brandId: string) {
    checkedBrandName.update((checkedBrands)=>{
        if(checkedBrands.indexOf(brandId) == -1){
            checkedBrands.push(brandId);
        }
        else{
            checkedBrands.splice(checkedBrands.indexOf(brandId),1);
        }
        return checkedBrands;
      })
}

    $:{console.log("checkedBrands",$checkedBrandName);}

</script>

<div class=" bg-gradient-to-b h-auto sticky top-4">
    <div class="flex flex-col px-5 py-4 w-[260px] h-fit">
      <h2 class="text-2xl font-semibold w-fit px-3 mb-3">{title}</h2>
      <div class="flex flex-col">
      {#if selectedBrands !==undefined && selectedBrands.length > 0}
      {#each selectedBrands as selectedbrand,index}
        <label class="text-blue-950 px-3 flex items-center gap-5">
          <input type="checkbox" class="w-4 h-4" name="brand" on:click={() => handleRadioClick(selectedbrand?.brand?.id)}/>
          <span class="text-lg py-1">{selectedbrand?.brand?.value?.data?.brandName}</span>
        </label>
      {/each}
    {/if}
    </div>
  </div>
  </div>