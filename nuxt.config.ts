export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            title: 'Агентство Анастасии Миллер - posh.agency',
            htmlAttrs: {
                lang: 'ru',
            },
            meta: [
                {charset: 'utf-8'},
                {
                    name: 'description',
                    content: 'Агентство Анастасии Миллер. Профессиональный менеджмент актёров в Москве. - posh.agency'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                },
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ],
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        }
    },
    devServer: {
        port: 8080
    },
    alias: {
        "assets": "@/assets",
    },
    devtools: {
        enabled: true
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: ['~/assets/styles/main.scss'],
    modules: ['@pinia/nuxt'],
    imports: {
        dirs: ['./stores'],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use "~/assets/styles/_variables" as *;
                    @import "~/assets/styles/_mixins";
                    @import "~/assets/styles/_animation";`
                }
            }
        }
    },
})
