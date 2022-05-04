module.exports = {
  siteMetadata: {
    title: `Gilberto Passos Lima`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `artigos`,
        path: `${__dirname}/src/artigos`,
      }
    },
    "gatsby-plugin-mdx",
    // "gatsby-plugin-image",
    // "gatsby-plugin-sharp",    
  ]
};