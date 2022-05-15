module.exports = {
  siteMetadata: {
    title: `Gilberto Passos Lima`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Yaml`, // a fixed string
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `artigos`,
        path: `${__dirname}/src/artigos`,
      }
    },
    // "gatsby-plugin-image",
    "gatsby-plugin-sharp",    
    "gatsby-transformer-sharp",
  ]
};