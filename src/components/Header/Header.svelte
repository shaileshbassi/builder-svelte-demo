<script lang="ts">
  export let logoName: any;
  export let image: any;
  export let navLinks: any;

  function click(url:any) {
    window.location.href = url;
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
    >
      {#each navLinks as nav}
      <!-- <button on:click={() => click(nav.url)} class="mr-5 hover:text-gray-900">{nav.title}</button> -->
      <a href={nav.url} class="mr-5 hover:text-gray-900">{nav.title}</a>
      {/each}
    </nav>
  </div>
</header>
