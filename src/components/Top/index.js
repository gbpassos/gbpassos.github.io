import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as style from "./top.module.scss"

const Top = ({children}) => {
  return (
    <div className={style.container}>
    <div className={style.title}>
      <h1>{children}</h1>
      <h2>Inovação &amp; Solução de problemas</h2>
      <h3>Praticidade &amp; Sistemas &amp; Automação</h3>
      <Link to="/contato">Contato</Link>
    </div>
    <StaticImage className={style.foto} src="../../assets/IMG_20190505_212405544 1.png" alt="foto" width={220} aspectRatio="1/1"/>
  </div>
  )
}

export default Top