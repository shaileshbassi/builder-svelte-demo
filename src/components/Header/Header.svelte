<script lang="ts">
  import { goto } from "$app/navigation";
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

      console.log(currentLanguage);
    } else {
      newPath = "/";
      currentLanguage = "en-US";
      console.log(currentLanguage);
    }
    goto(newPath);
  }
</script>

<header class="text-gray-600 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
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
      <button class="px-4 py-2 border rounded-md" on:click={changeLanguage}>
        {currentLanguage === "en-US" ? "en-FR" : "en-US"}
      </button>
    </div>
  </div>
</header>
