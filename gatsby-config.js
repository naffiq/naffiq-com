console.log(`${__dirname}/src/markdown-pages`);
module.exports = {
  siteMetadata: {
    title: `Galymzhan Abdugalimov — Personal website`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126212802-1"
      }
    },
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
  ]
};
