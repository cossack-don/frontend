const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Frontend с нуля',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    // search: true,
    nav: [
      {
        text: 'Курс',
        link: '/guide/start/1.html',
      },
      // {
      //   text: 'React',
      //   link: '/react/',
      // },
      {
        text: 'Полезные ссылки',
        link: '/config/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Введение',
          collapsable: false,
          children: [
            'start/1',
            'start/2',
            'start/8',
            'start/3',
            'start/4',
            'start/9',
            'start/6',
            'start/7',
            'start/5'
          ]
        },
        {
          title: 'HTML5',
          collapsable: false,
          children: [
            //  4-й файл не создал, пропустил
            'html/1',
            'html/2',
            'html/3',
            'html/5',
            'html/6',
            'html/7',
            'html/8',
            'html/9',
          ]
        },
        {
          title: 'CSS3',
          collapsable: false,
          children: [
            '',
            'css/1',
            'css/2',
            'css/3',
            'css/4',
            'css/5',
            'css/6',
          ]
        },
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'js/1',
            'js/2',
            'js/3',
            'js/4',
            'js/5',
            'js/6',
            'js/7',
          ]
        },
        {
          title: 'Практика - To Do List',
          collapsable: false,
          children: [
            'to-do-list/1',
          ]
        }
      ],
      // '/react/': [
      //   {
      //     title: 'React',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //       'test-vue',
      //     ]
      //   }
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

base:'/frontend/'

}
