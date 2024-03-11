// import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';
// // import { selectedLanguage } from '../../components/ProductCard/stores.js';
 
// /** @type {import('./$types').PageServerLoad} */
// let myLocale:string = "default"

// // selectedLanguage.subscribe(async (value) => {
// //     myLocale = value;
// // });

// // console.log(myLocale)
// export async function load(event) {
//     const content = await fetchOneEntry({
//         model: 'svelte-builder-demo',
//         apiKey: import.meta.env.VITE_BUILDER_PUBLIC_API_KEY,
//         options: {locale:myLocale},
//         userAttributes: {
//             urlPath: event.url.pathname || '/',
//         }
        
//     });
 
//     return { content, myLocale };
// }