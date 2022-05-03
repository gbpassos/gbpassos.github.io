import * as React from 'react'
import {Link, graphql} from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <div>
        <Link to="/">Home</Link>
        <h1>My Blog Posts</h1>
        <div>
        {
            data.allMdx.nodes.map(node => (
                <p key={node.id}>
                <Link to={`/artigos/${node.slug}`}>
                {node.frontmatter.title}
                </Link>
                <p>Posted: {node.frontmatter.date}</p>
              </p>
            ))
        }
        </div>
        <p>My cool posts will go in here</p>
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`
export default BlogPage