module.exports = {
  siteMetadata: {
    title: `Sowles Homes`,
    description: `Real estate company providing residents of Portland and surrounding areas with homes to be proud of`,
    author: `@jacobsowles`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131685783-2`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        //icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
