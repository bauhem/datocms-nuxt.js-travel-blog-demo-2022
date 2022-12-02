import i18n from './config/i18n'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    buildModules: [
      /* other modules */
      [
        '@nuxtjs/i18n',
        {
          vueI18nLoader: true,
          defaultLocale: 'fr',
          locales: [{
              code: 'en',
              name: 'English'
            },
            {
              code: 'fr',
              name: 'Français'
            }
          ],
          vueI18n: i18n
        }
      ]
    ],
    plugins: [
      '@/plugins/webflow.client',
    ],
    head: {
      title: 'bauhem-nuxt',
      htmlAttrs: {
        lang: 'en',
        "data-wf-site": "6388d1f4ab22f1a8fc67233a",
      },
      meta: [{
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ],
      script: [
        {
          src: '/js/webflow.js',
          type: 'text/javascript',
          body: true
        },
        {
          src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6388d1f4ab22f1a8fc67233a',
          type: 'text/javascript',
          integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
          crossorigin: 'anonymous'
        },
      ],
      link: [{
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: '/style/normalize.css'
        },
        {
          rel: 'stylesheet',
          href: '/style/webflow.css'
        },
        {
          rel: 'stylesheet',
          href: '/style/guillaumes-groovy-site-7233a7.webflow.css'
        }
      ],
    },
  },
  runtimeConfig: {
    public: {
      datocms: {
        token: process.env.NUXT_ENV_DATOCMS_API_TOKEN,
        environment: process.env.NUXT_ENV_DATOCMS_ENVIRONMENT,
        endpoint: 'https://graphql.datocms.com'
      }
    }
  }
})

