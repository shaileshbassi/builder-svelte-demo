<script lang='ts'>
	import { Content,isPreviewing } from '@builder.io/sdk-svelte';
	 import { CUSTOM_COMPONENTS, HEADER_COMPONENTS } from '../registerComponents/componentsRegistry'
	import './styles.css';

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data: any;
	// show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing();
  console.log(data.content);
  // data.isSolidHeader = data.headerContent?.isSolidHeader;
	const canShowHeaderContent = data.headerContent || isPreviewing();
</script>

<!-- <div class="app">

	<main class="">
		<slot />
	</main>
	
</div> -->
{#if canShowHeaderContent}
  <header>
    <Content
      model="common-header"
      content={data.headerContent}
      apiKey={import.meta.env.VITE_BUILDER_PUBLIC_API_KEY}
      customComponents={HEADER_COMPONENTS}
    />
  </header>
{/if}

<main class="app">
  {#if canShowContent}
    <Content
      model="svelte-page"
      content={data.content}
     apiKey={import.meta.env.VITE_BUILDER_PUBLIC_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  {:else}
    Content Not Found
  {/if}
</main>

