<script lang="ts">
  //@ts-nocheck
    import { onMount } from "svelte";
    // import Paginationbutton from "../PaginationButton/paginationbutton.svelte";
    import ProductCard from "./productCard.svelte";
    import { filterByBrandName } from "./stores";
  import FilterPanel from "./filterPanel.svelte";
  
    let articles:any = []; // Array to store fetched articles
    const BaseURL = "https://cdn.builder.io/api/v3/content/product-data?apiKey=7953d2f708184128b6bfffe7ceb85eea&includeRefs=true"
    $filterByBrandName;
    $:{console.log($filterByBrandName)}
  
    onMount(()=>{
        fetchData();
    })
  
    async function fetchData() {
      try {
  
        //fetching data from svelte-cards
        if(($filterByBrandName.length==0 || $filterByBrandName == "All")){
        const response = await fetch(BaseURL);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        articles = data.results;
      }
      else{
        const response = await fetch(`${BaseURL}&query.data.brand.id=${$filterByBrandName}`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        articles = data.results;
      }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  </script>
  
<main>
<div class="flex">
  <FilterPanel on:childClick={fetchData}/>
  <ProductCard articles={articles}/>
</div>
</main>