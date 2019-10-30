---
title: Menu Configuration
---

There are two ways to configure the menu.

#### _1) publisherMenuConfig option (array config)_

This is the default behavior. Theme setting `starterPages` is set to true. Publisher theme will output "Home", "About" & "Contact" with zero config. In the event you wanted to override this, you can add your config to the `publisherMenuConfig` theme option. For instance, if you wanted to add a link to `/portfolio` and child item to "Contact" you'd do the following:

```javascript
  {
    resolve: '@staticfuse/gatsby-theme-publisher',
    options: {
      publisherMenuConfig: [
        {
          label: 'Home',
          url: '/',
          isExternal: false,
        },
        {
          label: 'Blog',
          url: '/blog',
          isExternal: false,
        },
        {
          label: 'Portfolio',
          url: '/portfolio',
          isExternal: false,
        },
        {
          label: 'Contact',
          url: '/contact',
          isExternal: false,
          childItems: [
            {
              label: 'I live in the dropdown',
              url: '/some-url',
              isExternal: false,
            },
          ],
        },
      ],
      // More options if so desired...
    }
  }
```

Keep in mind it's up to you to link to a valid page. In the example above, you would need to add a Gatsby page at your-theme/src/pages/portfolio, otherwise when you visit `/portfolio'`, your site will 404.

*What is `isExternal: false`?*

This tells the Publisher theme and Gatsby wether to navigate to a link client site using Gatsby `<Link/>` or use a `<a>`.

_Client_

```javascript
{
  label: 'Blog',
  url: '/blog',
  isExternal: false,
},
```

_Full page reload_

```javascript
{
  label: 'StaticFuse',
  url: 'https://staticfuse.com',
  isExternal: true,
},
```

#### _2) Use a WordPress menu_

You can manage your menu within the your WordPress site as well. To do so, change Publisher theme setting to: `menuName: 'your menu name'`. For example, the setting for the example (image) below would be: `menuName: 'PRIMARY'`
![Gatsby Theme Publisher Screenshot](https://publishertheme.staticfuse.com/wp-content/uploads/2019/10/menuss.png)

If you set a menu name, Publisher will automatically import your WordPress pages. If no menu name is set, no WordPress pages will be imported. You can override this behavior with the `wpPages` configuration option.

Many WordPress pages will not render properly in Gatsby, so we generally do not recommend this option. It is better to build your pages in Gatsby, and use posts from WordPress.

*Known limitation:* For _both_ menu managment options, `childItems` are currently only supported _one_ level deep.