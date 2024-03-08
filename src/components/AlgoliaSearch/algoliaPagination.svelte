<script lang='ts'>
    // import { onMount } from 'svelte';
    import algoliasearch from 'algoliasearch';
  
    const searchApiKey: string = "be4a889dd15572cfb20b5032a5983665";
    const searchAppId: string = "5660QXGNR5";
    const indexName: string = "builder-product-hub";
  
    let searchResults: any[] = [];
    
    let currentQuery: string = '';
    
    const client = algoliasearch(searchAppId, searchApiKey);
    const index = client.initIndex(indexName);
  
    async function performSearch(query: string) {
        const resp = await index.search(query);
        searchResults = resp.hits;
    }
  
    async function handleSearch(query: string) {
        currentQuery = query;
        performSearch(currentQuery);
    }
  </script>
  
    <!-- Search input -->
   <div class="flex justify-center mt-5">
    <input class="border-2 border-solid border-color-text-gray px-1 py-1 w-4/5 sm:w-1/2 md:w-1/3" placeholder="Search product" type="text" on:input={(e) => handleSearch(e.target.value)}>
   </div>
   
    
    
    <!-- Display search results -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {#each searchResults as result (result.objectID)}
          <div class="border-[1px] border-solid border-color-text-gray bg-zinc-50 rounded hover:border-[2px] hover:border-black hover:bg-slate-100">
            <div class="aspect-auto h-[180px] mt-0">
              <img src={result.data.image} class="object-cover w-full h-full" alt={result.data.name} />
            </div>
            <div class="p-2">
              <h5 class="text-lg font-bold">{result.data.name}</h5>
              
          </div>
        {/each}
      </div>