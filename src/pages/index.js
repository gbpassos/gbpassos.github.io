import * as React from "react"
import { Link } from 'gatsby'
import Formacao from '../components/Formacao'
import Top from '../components/Top'
import Oque from '../components/Oque'

const IndexPage = () => {
  return (
    <main>
      <title>Gilberto Passos Lima</title>
      <Top/>
      <Oque/>
      <Formacao/>
      <Link to="/artigos">
        Artigos
      </Link>
    </main>
  )
}

export default IndexPage
