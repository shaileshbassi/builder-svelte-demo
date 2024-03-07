<script lang="ts">
    //@ts-nocheck
    import { onMount } from "svelte";
    import { filterByBrandName } from "./stores";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let brands:any;
    let checkedBrands: string;
  
    onMount(()=>{
        fetchData();
    })
  
    async function fetchData() {
      try {
  
        //fetching data from svelte-cards
        const response = await fetch(`https://cdn.builder.io/api/v3/content/brands?apiKey=7953d2f708184128b6bfffe7ceb85eea`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        brands = data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
 
    function handleRadioClick(brandId: number) {
    filterByBrandName.update((checkedBrands)=>{
          checkedBrands = brandId;
          return checkedBrands;
      })
    dispatch('childClick');
}

    $:{console.log("checkedBrands",checkedBrands);}
  </script>
 
 <div class="bg-[#eee]">
  <div class="flex flex-col px-5 py-4 w-[260px] border sticky top-4 h-fit bg-[#eee]">
    <h2 class="text-2xl font-semibold w-fit px-3 mb-3">Brands</h2>
    <div class="flex flex-col">
    {#if brands !==undefined && brands.length > 0}
    <label class="text-blue-950 px-3 flex items-center gap-5">
      <input type="radio" class="w-4 h-4" name="brand" on:click={() => handleRadioClick("All")}/>
      <span class="text-lg py-1">All</span>
    </label>
    {#each brands as brand,index}
      <label class="text-blue-950 px-3 flex items-center gap-5">
        <input type="radio" class="w-4 h-4" name="brand" on:click={() => handleRadioClick(brand.id)}/>
        <span class="text-lg py-1">{brand?.data?.brandName}</span>
      </label>
    {/each}
      {/if}
  </div>
</div>
</div>