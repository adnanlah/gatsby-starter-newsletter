import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/Layout'

interface StaticQueryProps extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        date: string
        title: string
      },
      body: string
    }
  }
}

const Issue: React.FunctionComponent<StaticQueryProps> = ({data}) => {
  console.log('/mdx.slug', data)
  return (
    <Layout>
      {/* <article>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <section />
      </article> */}
    </Layout>
  )
}

export const query = graphql`
  query (
    $id: String
  ) {
    markdownRemark(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export default Issue