module.exports = {
  siteMetadata: {
    title: "Gatsby Starter Newsletter",
    description: "",
    author: {
      name: "Adnan Lahrech",
      summary: "A web developer.",
    },
    description: "Gatsby starter for creating a newsletter (A weekly digest).",
    siteUrl: "https://www.gatsbyjs.io/",
    social: {
      twitter: "adencodes",
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
    resolve: "gatsby-source-filesystem",
      options: {
        name: "issues",
        path: `${__dirname}/issues`,
      }
    }
  ]
};