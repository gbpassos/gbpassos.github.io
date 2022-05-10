import * as React from 'react'
import foto from "@/assets/IMG_20190505_212405544 1.png"
import * as style from "./top.module.scss"

const Top = ({children}) => {
  return (
    <div className={style.container}>
    <div className={style.title}>
      <h1>{children}</h1>
      <h2>Inovação &amp; Solução de problemas</h2>
      <h3>Praticidade &amp; Sistemas &amp; Automação</h3>
    </div>
    <img src={foto} alt="foto"/>
  </div>
  )
}

export default Top