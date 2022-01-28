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
    resolve: "gatsby-source-filesystem",
      options: {
        name: "issues",
        path: `${__dirname}/issues`,
      }
    }
  ]
};