---
title: Theme Options
---

Next you need to fill out your site details in the theme options.

The following options can be configured in [your site's gatsby-config.js](https://github.com/staticfuse/staticfuse/blob/master/www/gatsby-config.js)

### Site Metadata

```javascript
    siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: '@staticfuse',
    siteUrl: 'https://staticfuse.com',
    }
```
In your-theme/gatsby-config.js, edit the siteMetadata object with your site title, url, etc.

Note: `siteUrl` refers to your final website address. `wordPressUrl` in the plugin options refers to the WordPress site. For example, your WordPress site may be hosted at data.mybusiness.com, but your Gatsby site will be at mybusiness.com.

### Theme Options

```javascript
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: 'https://data.staticfuse.com',
        blogURI: '/blog',
        mailChimpEndpoint: 0,
        // ...etc
       },
    },
  ],
```

| Option | Type | Default | Description |
| -------| ---- | ------- | ----------- |
| mailChimpEndpoint | string/boolean | 0 | [Your mailchimp endpoint](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/#mailchimp-endpoint). Set to `0` to disable.
| dynamicComments | boolean | 1 | Enable or disable dynamic comments. If enabled, anyone can post a comment. |
| gaTrackingId | string/boolean | 0 | Your google analytics UA code. Set to `0` to disable Google Analytics. |
| wordPressUrl | string | `"https://scottbolinger.com"` | The URL of your WordPress site |
| blogURI | string | '' | The path prefix on the blog and blog posts. No leading slash. `'/blog'` would result in `https://my-domain.com/blog/` |
| starterPages | boolean | true | Create a home, about, and contact page in Gatsby. |
| menuName | string/boolean | 0 | The name of the _WordPress_ menu you'd like to use or `0` if you don't want to render a menu. |
| publisherMenuConfig | array | [] | Optional array based way to configure the menu. More info [here](https://github.com/staticfuse/gatsby-theme-publisher#publisher-menu). |