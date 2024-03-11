<script lang="ts">
  //@ts-nocheck
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Search from "../AlgoliaSearch/algoliaSearch.svelte";
  export let logoName: any;
  export let image: any;
  export let navLinks: any;

  let currentLanguage = "en-US";

  function changeLanguage() {
    currentLanguage = currentLanguage === "en-US" ? "en-FR" : "en-US";
    let newPath = "";
    const currentPath = window.location.pathname;
    if (currentPath == "/") {
      newPath = "/en-FR";
      currentLanguage = "en-FR";
    } else {
      newPath = "/";
      currentLanguage = "en-US";
    }

    goto(newPath);
  }
</script>

<header class="flex flex-col text-gray-600 body-font shadow-md z-10 pb-8">
  <!-- <div class="order-2 w-full">
    <Search />
  </div> -->
  
  <div
    class="container w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <div
      class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      <a href="/" class="flex items-center">
        <img src={image} class="h-12 w-14" alt="logo" />
        <span class="ml-3 text-xl">{logoName}</span>
      </a>
    </div>
    <nav
    class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
    data-sveltekit-reload
  >
    {#each navLinks as nav}
      <a href={nav.url} class="mr-5 hover:text-gray-900">{nav.title}</a>
    {/each}
  </nav>
    <div class="langToggle">
      <button
        class="px-2 py-1 border rounded-md flex items-center justify-center gap-1"
        on:click={changeLanguage}
      >
        <img
          src="https://www.svgrepo.com/show/116369/earth-globe-tool.svg"
          class="h-3 w-3"
          alt="language"
        /> <span>{$page.url.pathname == "/en-FR" ? "US" : "FR"}</span>
      </button>
    </div>
  </div>
</header>
