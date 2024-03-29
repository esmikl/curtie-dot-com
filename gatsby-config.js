/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()
module.exports = {
    siteMetadata: {
        title: `Curtie Dot Com, Inc.`,
        description: `Curtis Harrison, photographer, Bloomer, Wisconsin.`,
        author: `Emily Mikl`,
        siteUrl: `http://www.curtie.com/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/images`,
            },
            __key: "images",
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                    families: ["ballinger-condensed"],
                },
            },
        },
    ],
}
