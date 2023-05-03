// https://nuxt.com/docs/api/configuration/nuxt-config

import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',

    ],
   

    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Gerardo Garcia: Front End Developer Specializing in Vuejs',
            meta: [
                {
                    name: 'Gerardo Garcia', content: "Front End Developer"
                }
            ],
            link: [
                {rel: 'icon', type: "image/x-icon", href: '/favicon.ico'}
            ],
            htmlAttrs: {
                lang: 'en',
            },

        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
        }
    }


})
