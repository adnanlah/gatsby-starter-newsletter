import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
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
  return (
    <Layout>
      <article>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default Issue