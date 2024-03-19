export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: 'POSH.AGENCY - Агентство Анастасии Миллер',
            htmlAttrs: {
                lang: 'ru',
            },
            meta: [
                {charset: 'utf-8'},
                {
                    name: 'description',
                    content: 'POSH.AGENCY - Агентство Анастасии Миллер. Профессиональный менеджмент актёров в Москве.'
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
        "assets": "../assets",
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
    modules: [
        '@pinia/nuxt',
    ],
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
    }
})
