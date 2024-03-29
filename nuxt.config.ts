// import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  // ssr: false,

  // // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      title: 'Matteo Courquin | Développeur Full Stack !! 🚀',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Un développeur web a votre écoute pour un projet a vos attentes !',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          property: 'og:title',
          content: 'Matteo Courquin | Développeur Full Stack !! 🚀',
        },
        {
          property: 'og:description',
          content: 'Matteo Courquin | Développeur Full Stack !! 🚀',
        },
        { property: 'og:url', content: 'matteo.courqu.in' },
        { property: 'og:image', content: '/ogImage.png' },
        // Google
        {
          name: 'google-site-verification',
          content: '6n81QjyK4C02a8g9mMeuhdHqnAcjhHRxsGVdgXVGQ2Y',
        },
        { name: 'referrer', content: 'default' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        // Canonical
        { rel: 'canonical', href: 'https://matteo.courqu.in' },
      ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  // link: [
  //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  //   // Canonical
  //   { rel: 'canonical', href: 'https://matteo.courqu.in' }
  // ],

  // // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],

  // // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [],

  // // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   // https://go.nuxtjs.dev/tailwindcss
  //   '@nuxtjs/tailwindcss',
  //   '@nuxtjs/style-resources',
  //   '@nuxt/image',
  //   'nuxt-gsap-module',
  // ],

  // gsap: {
  //   /* Module Options */
  // },

  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   css: false,

  //   beforeEnter(el) {
  //     this.$gsap.set(el, {
  //       opacity: 0
  //     })
  //   },

  //   enter(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 1,
  //       duration: 0.2,
  //       ease: 'power2.inOut',
  //       onComplete: done
  //     })
  //   },

  //   leave(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 0,
  //       duration: 0.2,
  //       ease: 'power2.inOut',
  //       onComplete: done
  //     })
  //   }
  // },

  // styleResources: {
  //   scss: [
  //     // add more scss files here
  //     '~assets/scss/main.scss',
  //   ]
  // },

  // // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  // ],

  // // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  // }
});
