module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
            '/install/',
            '/get_start/'
        ]
      },
      {
        title: '组件',
        children: [
            '/button/',
            '/input/'
        ]
      }
    ]
  }
}
