import * as React from "react"
import { Link } from 'gatsby'
import Formacao from '../components/Formacao'
import Top from '../components/Top'
import Oque from '../components/Oque'
import Experiencia from "../components/Experiencia"
import Resultados from "../components/Resultados"

const IndexPage = () => {
  return (
    <main>
      <title>Gilberto Passos Lima</title>
      <Top/>
      <Oque/>
      <Formacao/>
      <Experiencia/>
      <Resultados/>
      <Link to="/artigos">
        Artigos
      </Link>
    </main>
  )
}

export default IndexPage

// query MyQuery {
//   allYaml {
//     nodes {
//       formacao {
//         onde
//         quando
//       }
//       nome
//       what
//       experiencia {
//         descricao
//         oque
//         tags
//       }
//       resultados {
//         categoria
//         pagina
//         resumo
//         titulo
//       }
//     }
//   }
// }
