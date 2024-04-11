// external dependencies
import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-svelte";
import type { ServerLoadEvent } from "@sveltejs/kit";

/**
 * Load the Builder content for the page model
 * @param event The ServerLoadEvent object containing information about the request.
 * @returns An object containing the fetched Builder content for the footer and the page.
 */
export async function load(event: ServerLoadEvent) {

    let dynamicLocale;
    const segments = event.url.pathname.split("/");
    let catchall = segments.join("/");

    // Check if the first segment is a valid locale
    const potentialLocale = segments[1];
    const validLocales = ["en-US", "en-FR"]; // Add more locales as needed

    if (validLocales.includes(potentialLocale)) {
      dynamicLocale = potentialLocale;
      catchall = "/" + segments.splice(2).join("/");
    } else {
      dynamicLocale = "en-US"; // Default locale
      catchall = "/" + segments.splice(1).join("/");
    }

  // fetch your Builder content
  const commonAttributes = {
    apiKey: import.meta.env.VITE_BUILDER_PUBLIC_API_KEY,
    options: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: catchall,
      locale: '/',
    },
  };
  const [ headerContent, content] = await Promise.all([
    fetchOneEntry({
      model: "common-header",
      ...commonAttributes,
    }),
    fetchOneEntry({
      model: "svelte-page",
      ...commonAttributes,
    }),
  ]);

  return { headerContent, content };
}
