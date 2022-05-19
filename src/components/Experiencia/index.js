import * as React from 'react'
import Atividade from '../Atividade'
import * as style from './experiencia.module.scss'

const Experiencia = ({experiencias}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Experiência</h1>
            </div>
            <div className={style.lista}>
                {experiencias.map(({node}) => (
                    <Atividade titulo={node.oque} tags={node.categories}>{node.descricao}</Atividade>    
                ))}
            </div>
        </div>
    )
}

export default Experiencia