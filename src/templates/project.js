import React from 'react';
import { graphql } from 'gatsby';

const ProjectTemplate = ({ data }) => {
    return (
        <div>
            {data.allMdx.edges.map(({ node }) => {
                return (
                    <h1>{node.frontmatter.title}</h1>
                )
            })}
        </div>
    )
}

export const query = graphql`
    query($id:String!) {
        allMdx(filter:{id: { eq: $id }}) {
          edges {
            node {
              id
              slug
              frontmatter {
                title
                slug
                date
                tags
              }
            }
          }
        }
      }
      `

export default ProjectTemplate;