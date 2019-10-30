---
title: Theme Customization
---

You can customize the colors, add or remove pages, and edit template files. All theme customization should happen in the /demo folder. If you are familiar with WordPress, this is like a "child theme."

Any changes you make in the main gatsby-theme-publisher folder will be overwritten by theme updates.

### Logo

To add your logo, add demo/src/images/site-logo.png.

You will need to add a folder called images to the demo/src directory, and add your logo file inside with the name site-logo.png. You can make further modifications in the demo/src/components/Logo.js file.

### Customize Theme Colors

Open demo/src/gatsby-theme-publisher/theme/theme.js

The theme color defaults are commented out, you can uncommment them and change the value. For example, to change the header background color, change...

`// headerBg: "#2D3748"`

to any color, such as...

`headerBg: "#bada55"`

You can also use predefined color values, such as... 

`buttonBg: theme.colors.blue['500]`

or

`buttonText: theme.colors.orange['300']`

You can see those colors and more options [here](https://chakra-ui.com/theme).