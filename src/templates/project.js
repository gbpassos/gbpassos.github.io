import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';
import * as styles from './post.module.scss';

const ProjectTemplate = ({ data }) => {
    const node = data.allSanityPost.edges[0]?.node;
    return (
        <div className={styles.container}>
          <Link to="/">Voltar</Link>
          <GatsbyImage image={node.mainImage.asset.gatsbyImageData} alt={node.title}/>
          <div><small>{node.mainImageSource}</small></div>
          <h1>{node.title}</h1>
          <small><b>Publicado em {node.publishedAt}</b></small>
          <div>{node.resumo}</div>
          <PortableText value={node.body} />
        </div>
    )
}

export const query = graphql`
query($id:String!) {
  allSanityPost(filter: {id: {eq: $id}}) {
    edges {
      node {
        body: _rawBody(resolveReferences: {maxDepth: 10})
        publishedAt(formatString: "DD/MM/YYYY")
        title
        slug {
          current
        }
        resumo
        mainImageSource
        id
        mainImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, height: 200)
          }
        }
      }
    }
  }
}`

export default ProjectTemplate;