import React from 'react';
import { graphql, Link } from 'gatsby';
import { PortableText } from '@portabletext/react';

const ProjectTemplate = ({ data }) => {
    const node = data.allSanityPost.edges[0]?.node;
    return (
        <div>
          <Link to="/">Voltar</Link>
          <h1>{node.title}</h1>
          <div>{node.resumo}</div>
          <img src={node.mainImage.asset.publicUrl} alt="imagem de capa do artigo"/>
          <div><small>{node.mainImageSource}</small></div>
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
        title
        slug {
          current
        }
        resumo
        mainImageSource
        id
        mainImage {
          asset {
            publicUrl
          }
        }
      }
    }
  }
}`

export default ProjectTemplate;