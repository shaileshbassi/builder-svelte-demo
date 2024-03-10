<script lang="ts">
  // import { onMount } from 'svelte';
  import algoliasearch from "algoliasearch";

  const searchApiKey: string = "66b05fd9e4eeb52216dd84647112dde1";
  const searchAppId: string = "5660QXGNR5";
  const indexName: string = "builder-svelte-page";

  let searchResults: any[] = [];

  let currentQuery: string = "";

  const client = algoliasearch(searchAppId, searchApiKey);
  const index = client.initIndex(indexName);

  async function performSearch(query: string) {
    if (query.trim() !== "") {
      const resp = await index.search(query);
      searchResults = resp.hits;
      console.log(searchResults, "sss");
    } else {
      // If query is empty, clear the search results
      searchResults = [];
    }
  }

  async function handleSearch(event:any) {
    currentQuery = event.target.value;
    performSearch(currentQuery);
  }
</script>

<!-- Search input -->
<div class="flex justify-center mt-5">
  <input
    class="border-2 border-solid rounded-lg shadow-xl border-color-text-gray px-2 py-1 sm:w-1/2 md:w-1/3"
    placeholder="Search product"
    type="text"
    on:input={(e) => handleSearch(e)}
  />
</div>

<!-- Display search results -->
<div class="flex justify-center mt-3">
  {#each searchResults as result (result.objectID)}
    <div
      class="flex justify-center mx-3 w-1/4 border-[1px] border-solid border-color-text-gray bg-zinc-50 rounded-md hover:border-[2px] hover:border-black hover:bg-slate-100"
    >
      <div class="p-2">
        <a href="{result.query[0].value}"><h5 class="text-lg font-bold">{result.data.title}</h5></a>
      </div>
    </div>
  {/each}
  </div>
