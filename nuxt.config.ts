export default defineNuxtConfig({
    ssr: true,
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
