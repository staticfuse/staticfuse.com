---
title: Adding to an existing project
---

1. `yarn install @staticfuse/gatsby-theme-publisher`
2. In your `gatsby-config.js` :
```js
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        menuName: `PRIMARY`,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `http://data.gatsby.develop`, // The url of your WordPress install
        blogURI: '/blog' // Or whatever you'd prefer
      },
    },
  ],
```
