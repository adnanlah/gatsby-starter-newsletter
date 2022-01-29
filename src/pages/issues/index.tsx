import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Layout from '../../components/Layout'

interface StaticQueryProps extends PageProps {
  data: {
    allMarkdownRemark: {
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
  console.log('/issues', data)
  return (
    <Layout>
      <section>
        {/* <h1>My issue posts:</h1>
        <div>
          {
            data.allMarkdownRemark.nodes.map(node => (
              <article key={node.frontmatter.title}>
                <Link to={`/issues/${node.slug}`}>
                  <p>{node.frontmatter.title}</p>
                </Link>
                <small>{node.frontmatter.date}</small>
                <p>{node.frontmatter.description}</p>
              </article>
            ))
          }
        </div> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          slug
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`
export default IssuePage