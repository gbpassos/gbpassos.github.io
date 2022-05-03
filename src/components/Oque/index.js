import * as React from 'react'
import icone from "../../assets/healthicons-factory-worker-outline@2x.svg"
import './oque.scss'

const Oque = () => {
    return (
        <div class="oQueContainer">
            <div class="title">
                <h1>O que faço</h1>
                <img src={icone} alt="icone"/>
            </div>
            <div class="descri">
                Ajudo empresas e profissionais a solucionarem seus problemas por meio de metodologias consolidadas,
                experiência, e, principalmente, agregando as competências necessárias através de uma rede de relacionamentos,
                focada na inovação tecnológica
            </div>
        </div>
    )
}

export default Oque