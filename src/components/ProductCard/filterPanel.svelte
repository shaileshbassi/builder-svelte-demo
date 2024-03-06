<script lang="ts">
    //@ts-nocheck
    import { onMount } from "svelte";
    import { filterByBrandName } from "./stores";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let brands:any;
    let checkedBrands: number[] = [];
    let selection=[];
  
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
 
    function handleCheckboxClick(brandId: number) {
    filterByBrandName.update((checkedBrands)=>{
      if (checkedBrands.includes(brandId)) {
          checkedBrands = checkedBrands.filter((indexItem: number) => indexItem !== brandId);
          return checkedBrands;
      } else {
        //   checkedBrands.push(brandId);
        return[...checkedBrands, brandId];
      }
    })
    dispatch('childClick');
}

    $:{console.log("checkedBrands",checkedBrands);}
  </script>
 
  <div class="flex flex-col px-5 py-4 w-[260px] border">
    <h2 class="text-xl font-semibold  w-fit mx-auto">Brands</h2>
    <div class="flex flex-col">
    {#if brands !==undefined && brands.length > 0}
    {#each brands as brand,index}
      <label class="text-blue-950 px-3 flex items-center gap-5">
        <input type="checkbox" class="w-6 h-6" bind:group={selection} value={index} on:click={() => handleCheckboxClick(brand.id)}/>
        <span class="text-lg py-1">{brand?.data?.brandName}</span>
      </label>
    {/each}
      {/if}
  </div>
</div>