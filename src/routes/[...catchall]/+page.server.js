// @ts-nocheck
import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-svelte";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  // fetch your Builder content
  // const MyGender = "female"
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

  const content = await fetchOneEntry({
    model: "svelte-page",
    apiKey: import.meta.env.VITE_BUILDER_PUBLIC_API_KEY,
    options: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      // urlPath: event.url.pathname || '/',
      urlPath: catchall,
      locale: dynamicLocale,
      // gender: MyGender,
    },
  });

  return { content, dynamicLocale };
}
