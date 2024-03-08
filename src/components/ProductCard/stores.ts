import { writable } from 'svelte/store';

export const filterByBrandName = writable<number[]>([]);
export const selectedLanguage = writable("");
export const checkedBrandName = writable<string[]>([])