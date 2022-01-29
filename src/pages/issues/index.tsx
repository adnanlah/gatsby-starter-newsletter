import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Layout from '../../components/Layout'

interface StaticQueryProps extends PageProps {
  data: {
    allMdx: {
      nodes: {
        slug: string
        frontmatter: {
          date: string
          title: string
          description: string
        }
      }[]
    }
  }
}

const IssuePage: React.FunctionComponent<StaticQueryProps> = ({ data }) => {
  return (
    <Layout>
      <section>
        <h1>My issue posts:</h1>
        <div>
          {
            data.allMdx.nodes.map(node => (
              <article key={node.frontmatter.title}>
                <Link to={`/issues/${node.slug}`}>
                  <p>{node.frontmatter.title}</p>
                </Link>
                <small>{node.frontmatter.date}</small>
                <p>{node.frontmatter.description}</p>
              </article>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          slug
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
          }
        }
    }
  }
`
export default IssuePage