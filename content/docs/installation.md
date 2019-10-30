---
title: Installing the Publisher Theme
---

First you need to download the theme, which is a Gatsby project.

### Prequisites

- [Node and NPM](https://www.gatsbyjs.org/tutorial/part-zero/#-install-nodejs-and-npm)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Overview

1.  `git clone https://github.com/staticfuse/create-gatsby-theme-publisher`
2.  cd into the folder `cd create-gatsby-theme-publisher`
3.  Install dependencies `yarn`
4.  Install [WPGraphQL plugin on your WordPress site](https://github.com/wp-graphql/wp-graphql)
5.  Configure your site options in gatsby-config.js
6.  `gatsby develop` to start the local server
7.  Add your logo and [customize the theme](https://github.com/staticfuse/gatsby-theme-publisher#theme-customization)
8.  Publish to Netlify or any host.

### Adding to an existing project

You can also add this theme to an existing Gatsby site.

1. `yarn add @staticfuse/gatsby-theme-publisher`
2. In your `gatsby-config.js` :
```js
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://publishertheme.staticfuse.com`, // The url of your WordPress install
        blogURI: '/blog' // Your posts page, change to whatever you'd prefer
      },
    },
  ],
```