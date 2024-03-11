<script lang="ts">
  import { isPreviewing, Content } from "@builder.io/sdk-svelte";
  import { CUSTOM_COMPONENTS } from '../../registerComponents/componentsRegistry'
  import CardContainer from "../../components/cardContainer.svelte";
  import { selectedLanguage } from "../../components/ProductCard/stores";
  import BlockLocale from '../../components/blockLocale.svelte'
  import { fetchOneEntry } from '@builder.io/sdk-svelte';
  import Loader from '../../components/Loader/Loader.svelte'
  import { onMount } from "svelte";

  let data: any;
  let loading = true;
  const event = { url: { pathname: "/section-model" } };

  selectedLanguage.subscribe(async (value) => {
    await load(event, value);
  });

  async function load(event: any, value?: any) {
    let myLocale = value || "default";
    const content = await fetchOneEntry({
      model: 'svelte-builder-demo',
      apiKey: import.meta.env.VITE_BUILDER_PUBLIC_API_KEY,
      options: { locale: myLocale },
      userAttributes: {
          urlPath: event.url.pathname || '/',
      }   
    });
    data = { content, myLocale };
    loading = false; // Data loaded, set loading to false
    return { content, myLocale };
  }

  onMount(async () => {
    setTimeout(() => {
      if (loading) {
        // Data is still loading after 10 seconds, show "Content not found"
        loading = false;
        data = null;
      }
    }, 10000); // 10 seconds
    await load(event);
  });

  let canShowContent: any;
  $: canShowContent = data?.content || isPreviewing();
</script>

<main>
  {#if canShowContent} 
    <Content
      enrich={true}
      model="svelte-builder-demo"
      content={data.content}
      apiKey={import.meta.env.VITE_BUILDER_PUBLIC_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
      locale={data.myLocale}
    />
    <BlockLocale />
    <CardContainer />
  {:else if loading}
    <Loader />
  {:else}
    <div>Content not found</div>
  {/if}
</main>
