---
title: Publishing to Netlify
---

Netlify is a static hosting environment that is free to start, and handles Gatsby sites really well. To publish your site on Netlify, first create a new account at [netlify.com](https://netlify.com).

Next, add your theme project files to a Github repository.

Login to Netlify and you will see a `New site from git` button at the top right corner of the screen. Click on it and authorize Netlify to use your account. Choose your website repository and it will take you to deploy settings with the below options.

- Branch to deploy: You can specify a branch to monitor. When you push to that particular branch, only then will Netlify build and deploy the site. The default is master.
- Build Command: You can specify the command you want Netlify to run when you push to the above branch. The default is `gatsby build`.
- Publish directory: You can specify which folder Netlify should use to host the website. eg. public, dist, build. The default is `public`.
- Advanced build settings: If the site needs environment variables to build, you can specify them by clicking on Show advanced and then the New Variable button.

Click on the Deploy site button and Netlify will start the build and deploy process you have specified. You can go to the Deploys tab and see the process unfold in the Deploy log. After a few moments, it will give you the live site URL eg. random-name.netlify.com.

### Gatsby Toolkit Plugin

You'll want to install the [Gatsby Toolkit plugin](https://github.com/staticfuse/gatsby-toolkit) and configure a build hook. This will rebuild your site on Netlify any time a new post or page is updated or published.

