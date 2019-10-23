module.exports = {
  siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: 'staticfuse',
    siteUrl: `https://staticfuse.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: "https://gmail.us4.list-manage.com/subscribe/post?u=914ae019ecb5ca02710493cdd&amp;id=d7c63b789d",
        dynamicComments: 1,
        gaTrackingId: "UA-150753228-1",
        wordPressUrl: `https://data.staticfuse.com`,
        blogURI: '/blog'
      },
    },
  ],
}