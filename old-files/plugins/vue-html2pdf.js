// import Vue from 'vue'

// import VueHtml2pdf from 'vue-html2pdf'
// Vue.use(VueHtml2pdf)

import html2pdf from 'html2pdf.js'

export default (context, inject) => {
  inject('html2pdf', html2pdf)
}