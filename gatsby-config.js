var dotenv = require("dotenv")
dotenv.config()

const { spaceId, accessToken, snipcart } = process.env

module.exports = {
  siteMetadata: {
    title: `OneShopper`,
    description: `E-Commerce site with Gatsby and React`,
    author: `@rohitguptab`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-176422268-1",
        head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OneShopper`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oneshopper-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
      },
    },
    // {
    //   resolve: "gatsby-plugin-snipcartv3",
    //   options: {
    //     apiKey: snipcart,
    //     autopop: true,
    //   },
    // },
  ],
}
