import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({data}) => {
    return (
      <div>
          <Link to="/">Voltar</Link>
          <title>{data.mdx.frontmatter.title}</title>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.date}</p>
          <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      </div>
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

export default BlogPost