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
                {experiencias.map(exp => (
                    <Atividade titulo={exp.oque} tags={exp.tags}>{exp.descricao}</Atividade>    
                ))}
            </div>
        </div>
    )
}

export default Experiencia