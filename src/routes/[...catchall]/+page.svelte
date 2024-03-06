<script>
  import { isPreviewing, Content } from "@builder.io/sdk-svelte";
  import { CUSTOM_COMPONENTS } from '../../registerComponents/componentsRegistry'

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;

  // we want to show unpublished content when in preview mode.
  const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<!-- locale={data?.content?.query[1]?.value[0]}, -->

<paginate content={data}/>

<main>
  {#if canShowContent}
    <Content
      model="svelte-page"
      content={data.content}
      apiKey={import.meta.env.VITE_BUILDER_PUBLIC_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
      locale={data.dynamicLocale}
    />
  {:else}
    Content Not Found
  {/if}
</main>
