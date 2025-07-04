import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "Logixs - Transport & Logistics NuxtJS Template",
            script: []
        }
    },
    css: [
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
        "/public/css/bootstrap.min.css",
        "/public/css/style.css",
        "/public/css/responsive.css",
    ],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                  "DM+Sans": {
                        wght: [300, 400, 500, 600, 700, 900]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
    ],
    // plugins: [
    //     '~/plugins/wow.js',
    //   ],
})
