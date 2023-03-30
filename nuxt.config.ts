// https://nuxt.com/docs/api/configuration/nuxt-config

import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',

    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Jennifer Payan: Emerging Archivist and Artist',
            meta: [
                {
                    name: 'Jennifer Payan', content: "Emergins Arvchivist and Artist"
                }
            ],
            link: [
                {rel: 'icon', type: "image/x-icon", href: '/favicon.ico'}
            ],
            htmlAttrs: {
                lang: 'en',
            },

        },
    },

    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
        }
    }


})
