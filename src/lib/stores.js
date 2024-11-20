import { writable } from "svelte/store";

export let paginas = writable({})
export let generales = writable({})
export let proyectos = writable([])
export let cargado = writable({inicio:false})

