<template>
  <div>
    <HeroSection/>
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

const { data } = await useGraphqlQuery({
  query: `
    {
          site: _site {
            favicon: faviconMetaTags {
              ...seoMetaTagsFields
            }
          }

          posts: allWorks(first: 10, orderBy: _firstPublishedAt_DESC) {
            id
            title
            slug
            coverImage {
              responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 860 }) {
                ...imageFields
              }
            }
          }
        }

    ${imageFields}
    ${seoMetaTagsFields}
  `,
  key: route.fullPath,
})

const posts = computed(() => data.value.posts)

const ready = computed(() => !!data.value)

useHead({
  htmlAttrs: {
        "data-wf-page": "6388d1f4ab22f1395867234d",
    }
})
useHead(() => {
  if (!data.value) {
    return {}
  }

  return toHead(data.value.site.favicon)
})

</script>
