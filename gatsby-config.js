/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    homePage: {
      title: `SHIJIE ZHOU`,
      description: `Shijie Zhou studies at University of California, San Diego in the Interdisciplinary Computer in Arts. He is also the member for design and construct web developer at the Worldview Project organization. Currently, he is working in Code 9, Pte Ltd software engineer. He obtains Associate degree in Green River College, and also finish the B.A. degree at UCSD. He gained experience in media use and computer art. He also familiar with web design and customize selling pages on ebay which promote stuffs at leisure time.

      Read more: http://www.shijiezhou.com/#ixzz7nUzsqbg6`,
      author: `@shijiezhou`,
      siteUrl: `https://portfolio.shijiezhou.com/`,
      redirectTo: '/',
      menu: 'Home',
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
