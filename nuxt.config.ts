// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { PluginConfig } from 'svgo'

const svgConfig = {
  name: 'prefixIds',
  params: {
    prefixIds: true,
    prefixClassNames: true
  }
} as PluginConfig

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: 'Nova - модельное агентство',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {
          name: 'description',
          content: 'Nova — модельное агентство стриминг моделей. Мы предоставляем лучшие условия для работы в сфере стриминга: высокий доход, гибкий график и поддержку на каждом этапе. Начни карьеру с Nova!'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  },
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component',
        svgoConfig: {
          plugins: [
            svgConfig
          ]
        }
      })
    ]
  },
  modules: [
    '@vueuse/nuxt',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '99606118',
        webvisor: true,
        clickmap: true
        // useCDN: false,
        // trackLinks: true,
        // accurateTrackBounce: true,
      }
    ]
  ],
  css: ['/assets/styles/reset.css'],
  devtools: { enabled: true }
})
