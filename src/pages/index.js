import * as React from "react"
import { graphql } from 'gatsby'
import Formacao from '../components/Formacao'
import Top from '../components/Top'
import Oque from '../components/Oque'
import Experiencia from "../components/Experiencia"
import Resultados from "../components/Resultados"

const IndexPage = ({data}) => {
  return (
    <div>
    {data.allYaml.nodes.map(node => (
      <main>
        <title>{node.nome}</title>
        <Top>{node.nome}</Top>
        <Oque>{node.what}</Oque>
        <Formacao cursos={node.formacao}/>
        <Experiencia experiencias={node.experiencia}/>
        <Resultados resultados={node.resultados}/>
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
  }`