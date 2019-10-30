---
title: WordPress Setup
---

Your WordPress site will be your data source. You can use an existing site or create a new one.

The easiest way to get started is to create a new WordPress installation on any host. It just needs to be publicly accessible, so you can use SpinupWP to create a site on any platform, buy a managed WordPress hosting plan, etc.

Since traffic will not be hitting this site directly, you do not need an expensive plan.

### Using an Existing Site

You can also move an existing site to Gatsby, but there are some extra considerations. You will have to change the domain for the site and all assets like images and links. There will be some downtime migrating the site.

### Install WPGraphQL

You'll need to download and install the [WPGraphQL plugin.](https://www.wpgraphql.com/) As of this writing, the plugin is only available on Github, so you can download the .zip file, and add it under Plugins => Add New => Upload.

### Domain

Next you’ll need to configure a domain for your WordPress site. We like to use a subdomain such as data.mysite.com, but it’s not public facing so it doesn’t really matter.

That’s it for now, we’ll come back to the WordPress site later.