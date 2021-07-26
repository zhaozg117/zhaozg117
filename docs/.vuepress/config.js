module.exports = {
  title: '笔记',
  description: '个人前端相关笔记',
  displayAllHeaders: true, // 默认值：false
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vue', link: '/guide/vue/vue2' },
      { text: '浏览器', link: '/guide/browse/' },
    ],
    sidebar: {
      '/guide/vue/': ['vue2', 'vue3'],
      '/guide/browse/': [
        {
          title: 'Typescript 学习',
          collapsable: true,
          children: ['render', 'cache'],
        },
      ],
    },
  },
}
