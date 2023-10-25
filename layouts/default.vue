<template>
  <div class="LayoutDefault">
    <Header />
    <Nuxt :key="$route.fullPath" />
    <Footer />
    <ScrollToTop />
    <ContactModal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import ContactModal from '@/components/shared/ContactModal.vue'

export default {

  components: {
    ContactModal,
  },

  data() {
    return {
      isModalVisible: false,
    }
  },

  head() {
    return {
      script: [{
        type:'text/javascript',
        innerHTML: `
        hbspt.forms.create({
          region: "na1",
          portalId: "43665306",
          formId: "f5543543-c014-4e86-a502-79069ed72a34"
        });`
      }]
    }
  },

  async fetch() {
    await this.fetchArticlesFromStore()
  },

  mounted() {
        if (window.location.hostname.includes('scrumlaunch.com')) {
      // luckyorange
      const scriptLucky = document.createElement('script')
      scriptLucky.setAttribute("src", "https://tools.luckyorange.com/core/lo.js?site-id=0a6cf2b2")

      // googletagmanager
      const scriptSrc = document.createElement('script')
      scriptSrc.setAttribute(
        'src',
        'https://www.googletagmanager.com/gtag/js?id=UA-146499571-1'
      )
      scriptSrc.setAttribute('async', '')

      const scriptInit = document.createElement('script')
      scriptInit.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-146499571-1');`

      document.head.appendChild(scriptSrc)
      document.head.appendChild(scriptInit)
      document.head.appendChild(scriptLucky)
      // googletagmanager

      // intercom
      const intercomSettings = document.createElement('script')
      intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

      const intercomScript = document.createElement('script')
      intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

      document.body.appendChild(intercomSettings)
      document.body.appendChild(intercomScript)
      // intercom

      // linkedin
      const linkedinSettings = document.createElement('script')
      linkedinSettings.innerHTML = `_linkedin_partner_id = "4702825";window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];window._linkedin_data_partner_ids.push(_linkedin_partner_id);`

      const linkedinScript = document.createElement('script')
      linkedinScript.innerHTML = `(function(l) {if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s = document.getElementsByTagName("script")[0];var b = document.createElement("script");b.type = "text/javascript";b.async = true;b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b, s);})(window.lintrk);;`

      document.body.appendChild(linkedinSettings)
      document.body.appendChild(linkedinScript)
      // linkedin

      // meta pixel
      const metaPixelSettings = document.createElement('script')
      metaPixelSettings.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '411211710930789');fbq('track', 'PageView');`
      document.body.appendChild(metaPixelSettings)
      // meta pixel

      // visitor tracker
      const visitorTrackerSettings = document.createElement('script')
      visitorTrackerSettings.setAttribute('async', "")
      visitorTrackerSettings.setAttribute('src', "http://script.crazyegg.com/pages/scripts/0114/5321.js")
      document.body.appendChild(visitorTrackerSettings)
      // visitor tracker

      // feeder
      const feederSettings = document.createElement('script')
      feederSettings.innerHTML = `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('ywVkO4XVpRe8Z6Bj');`
      document.body.appendChild(feederSettings)
      // feeder
    }

    if (
      window.location.hostname.includes('scrumlaunch-staging.herokuapp.com')
    ) {
      // intercom
      const intercomSettings = document.createElement('script')
      intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

      const intercomScript = document.createElement('script')
      intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

      document.body.appendChild(intercomSettings)
      document.body.appendChild(intercomScript)
      // intercom

      // linkedin
      const linkedinSettings = document.createElement('script')
      linkedinSettings.innerHTML = `_linkedin_partner_id = "4702825";window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];window._linkedin_data_partner_ids.push(_linkedin_partner_id);`

      const linkedinScript = document.createElement('script')
      linkedinScript.innerHTML = `(function(l) {if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s = document.getElementsByTagName("script")[0];var b = document.createElement("script");b.type = "text/javascript";b.async = true;b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b, s);})(window.lintrk);;`

      document.body.appendChild(linkedinSettings)
      document.body.appendChild(linkedinScript)
      // linkedin

      // meta pixel
      const metaPixelSettings = document.createElement('script')
      metaPixelSettings.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '411211710930789');fbq('track', 'PageView');`
      document.body.appendChild(metaPixelSettings)
      // meta pixel

      // visitor tracker
      const visitorTrackerSettings = document.createElement('script')
      visitorTrackerSettings.setAttribute('async', "")
      visitorTrackerSettings.setAttribute('src', "http://script.crazyegg.com/pages/scripts/0114/5321.js")
      document.body.appendChild(visitorTrackerSettings)
      // visitor tracker

      // feeder
      const feederSettings = document.createElement('script')
      feederSettings.innerHTML = `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('ywVkO4XVpRe8Z6Bj');`
      document.body.appendChild(feederSettings)
      // feeder
    }

    if (window.location.hostname.includes('localhost')) {
      // intercom
      const intercomSettings = document.createElement('script')
      intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

      const intercomScript = document.createElement('script')
      intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

      document.body.appendChild(intercomSettings)
      document.body.appendChild(intercomScript)
      // intercom
    }
  },
  methods: {
    async fetchArticlesFromStore() {
      await this.$store.dispatch('articles/fetchArticles');
    },
    showModal($event) {
      this.isModalVisible = true
      $event.preventDefault();
      $event.returnValue = '';
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
