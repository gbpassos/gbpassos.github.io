import * as React from 'react'
import {container} from '../../css/main.module.scss'
import foto from "../../assets/IMG_20190505_212405544 1.png"

const containerStyle = {
  "font-family": ['Libre Franklin', "Helvetica", "Arial", "sans-serif"],
  "font-size": "18px",
}

const Top = () => {
  return (
    <div class={container} style={containerStyle}>
    <div class="title">
      <h1>Gilberto Passos Lima</h1>
      <h2>Inovação &amp; Solução de problemas</h2>
      <h3>Praticidade &amp; Sistemas &amp; Automação</h3>
    </div>
    <img src={foto} alt="foto"/>
  </div>
  )
}

export default Top