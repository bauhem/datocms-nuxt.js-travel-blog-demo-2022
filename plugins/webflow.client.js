import jQuery from 'jquery'

const initWebFlow = () => {
  jQuery(document).ready(function () {
    if (window.Webflow !== undefined) {
      window.Webflow.destroy()
      window.Webflow.ready()
      window.Webflow.require('ix2').init()
      document.dispatchEvent(new Event('readystatechange'))
    }
  })
}

// Set a this.$initWebflow proto
Vue.prototype.$initWebflow = initWebFlow

// For each page loaded
export default ({ app }) => {
  app.router.afterEach((to, from) => {
    jQuery(document).trigger('router-loaded')
    initWebFlow()
  })
}
