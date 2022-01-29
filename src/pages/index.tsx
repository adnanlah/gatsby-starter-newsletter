import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <main style={{width: '50%'}}>
        <title>Home Page</title>
        <h1>{ data.site.siteMetadata.title }</h1>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </main>
    </Layout>
  )
}

export default IndexPage
