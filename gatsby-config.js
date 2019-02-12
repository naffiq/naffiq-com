module.exports = {
  siteMetadata: {
    title: `Galymzhan Abdugalimov — Personal website`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126212802-1"
      }
    }
  ]
};
