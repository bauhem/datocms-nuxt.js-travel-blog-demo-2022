<template>
  <div>
    <HeroSection v-bind:item="data.page.contenu[0]"/>
    <AboutUs/>
    <Stats/>
    <Projects/>
    <ImageInterlude/>
    <Services/>
    <Apps/>
    <News/>
    <OurClient/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">

import { imageFields, seoMetaTagsFields, formatDate } from '~/lib'

import { toHead, Image as DatocmsImage, StructuredText as DatocmsStructuredText } from 'vue-datocms';

const route = useRoute()
const { locale, locales } = useI18n()


const { data } = await useGraphqlQuery({
  query: `
     query Page($locale: SiteLocale) {
          site: _site {
            favicon: faviconMetaTags {
              ...seoMetaTagsFields
            }
          }

          page(locale: $locale, filter: {slug: {eq: ""}, _status: {eq: published}}) {
              seo: _seoMetaTags {
              attributes
              content
              tag
            }
            contenu {
              ... on TexteRecord {
                id
                _modelApiKey
              }
              ... on AnimIntroRecord {
                id
                _modelApiKey
              }
              ... on TestimonialRecord {
                id
                menu
                contenu {
                  titre
                  sousTitre
                  paragraph
                  image {
                    responsiveImage(imgixParams: {fit: crop, crop: focalpoint, q: 40, auto: format, w: "350", h: "350"}) {
                    src
                    srcSet
                  }
                  }
                  id
                  _modelApiKey
                }
                _modelApiKey
              }
              ... on CustomerRecord {
                id
                paragraph
                contenu {
                  logo {
                    responsiveImage(imgixParams: {fit: fill, q: 40, auto: format, w: "250", h: "150"}) {
                    src
                    srcSet
                  }
                  }
                  id
                  _modelApiKey
                }
                _modelApiKey
              }
              ... on SolutionRecord {
                id
                paragraph
                paragraph2
                menu
                _modelApiKey
              }
              ... on ReadyRecord {
                id
                paragraph
                menu
                contenu {
                  id
                  contenu
                  _modelApiKey
                }
                _modelApiKey
              }
              ... on ParagraphRecord {
                id
                description
                _modelApiKey
              }
              ... on PricingRecord {
                id
                menu
                paragraph
                contenu {
                  paragraph
                  titre
                  _modelApiKey
                  service {
                    intro
                    id
                    title
                    description
                    slug
                  }
                }
                _modelApiKey
              }
              ... on NewsRecord {
                id
                menu
                _modelApiKey
              }
              ... on CtaRecord {
                id
                description
                _modelApiKey
              }
              ... on MissionRecord {
                id
                menu
                _modelApiKey
                paragraph
              }
              ... on HowRecord {
                id
                paragraph
                menu
                contenu {
                  titre
                  sousTitre
                  paragraph
                  image {
                    url
                  }
                  _modelApiKey
                  id
                }
                _modelApiKey
              }
              ... on StatRecord {
                id
                contenu {
                  titre
                  sousTitre
                  paragraph
                  image {
                    url
                  }
                  _modelApiKey
                  id
                }
                _modelApiKey
              }
              ... on HeroRecord {
                id
                paragraph
                contenu {
                  id
                  contenu
                  _modelApiKey
                }
                _modelApiKey
              }
              ... on ListServiceRecord {
                id
                description
                _modelApiKey
              }
              ... on CarouselRecord {
                id
                paragraph
                menu
                _modelApiKey
              }
            }
          }
        }

    ${seoMetaTagsFields}
  `,
  key: route.fullPath,
  variables: {
      slug: route.fullPath,
      locale: locale
    },
})

const page = computed(() => data.page)

const ready = computed(() => !!data)

useHead({
  htmlAttrs: {
        "data-wf-page": "6388d1f4ab22f1395867234d",
    }
})
useHead(() => {
  if (!data) {
    return {}
  }

  return toHead(data.value.site.favicon)
})

</script>
