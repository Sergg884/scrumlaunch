import Vue from 'vue'
import Hotjar from 'vue-hotjar'

if (window.location.hostname.includes('scrumlaunch.com')) {
  Vue.use(Hotjar, {
    id: '2929533',
    isProduction: true,
    snippetVersion: 6,
  })
}
