module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
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
    "gatsby-plugin-mdx"
  ]
};