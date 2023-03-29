// https://nuxt.com/docs/api/configuration/nuxt-config

import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',

    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },

})
