import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Prose Before Hoes",
  description: "A site which shows book options for our book club.",
  base: '/bookclub-choice/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    logo: '/logo-circle-crop.png',

    socialLinks: [
      { icon: 'github', link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/bookclub-choice/logo-circle-crop.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }],
    ['link', { rel: 'stylesheet', href: '/bookclub-choice/custom.css' }]
  ]
})

