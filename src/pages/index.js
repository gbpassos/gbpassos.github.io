import * as React from "react"
import { graphql } from 'gatsby'
import Formacao from '../components/Formacao'
import Top from '../components/Top'
import Oque from '../components/Oque'
import Experiencia from "../components/Experiencia"
import Resultados from "../components/Resultados"
import GrupoEmpresas from "../components/GrupoEmpresas"

const IndexPage = ({data}) => {
  return (
    <div>
    {data.allYaml.nodes.map(node => (
      <main>
        <title>{node.nome}</title>
        <Top>{node.nome}</Top>
        <Oque>{node.what}</Oque>
        <Formacao cursos={data.allSanityFormacao.edges}/>
        <Experiencia experiencias={data.allSanityExperiencia.edges}/>
        <Resultados resultados={data.allSanityResultado.edges}/>
        <GrupoEmpresas empresas={data.allSanityEmpresa.edges}/>
      </main>
      ))}
      </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allYaml {
      nodes {
        nome
        what
        formacao {
          onde
          quando
          icon
        }
        experiencia {
          descricao
          oque
          tags
        }
        resultados {
          categoria
          pagina
          resumo
          titulo
        }
      }
    }
    allSanityFormacao(sort: {fields: year, order: DESC}) {
      edges {
        node {
          year
          where
          icon
        }
      }
    }
    allSanityExperiencia {
      edges {
        node {
          oque
          descricao
          categories {
            title
          }
        }
      }
    }

    allSanityResultado {
      edges {
        node {
          titulo
          descricao: _rawDescricao(resolveReferences: {maxDepth: 10})
          image {
            asset {
              gatsbyImageData(fit: SCALE, placeholder: BLURRED, width: 400, height: 200)
              publicUrl
              url
              resize(width: 100, height: 100, fit: CONTAIN) {
                src
              }
            }
          }
          arquivos {
            ... on SanityPost {
              id
              slug {
                current
              }
              _type
            }
            ... on SanityArquivo {
              id
              name
              file {
                asset {
                  url
                }
              }
              _type
            }
          }
        }
      }
    }
    allSanityEmpresa {
      edges {
        node {
          logo {
            asset {
              gatsbyImageData(width: 300, height: 200, layout: CONSTRAINED, fit: CLIP)
            }
          }
          descricao: _rawDescricao(resolveReferences: {maxDepth: 10})
          nome
        }
      }
    }
  }`