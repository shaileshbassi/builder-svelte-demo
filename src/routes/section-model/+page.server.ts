import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';
 
/** @type {import('./$types').PageServerLoad} */

 let myLocale:any = 'default'

export async function load(event) {
    const content = await fetchOneEntry({
        model: 'svelte-builder-demo',
        apiKey: import.meta.env.VITE_BUILDER_PUBLIC_API_KEY,
        options: {locale:myLocale},
        userAttributes: {
            urlPath: event.url.pathname || '/',
        }
        
    });
 
    return { content, myLocale };
}