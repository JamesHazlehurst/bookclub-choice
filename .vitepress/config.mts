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
    logo: './images/logo.jpg',

    socialLinks: [
      { icon: 'github', link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: './images/logo.jpg' }]
  ]
})

