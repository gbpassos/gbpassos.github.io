import * as React from 'react'
import { Icon } from '@iconify/react'
import Curso from '../Curso'
import * as style from './formacao.module.scss'

const Formacao = ({cursos}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <Icon className={style.iconify} icon="fluent:hat-graduation-20-regular"/>
                <h1>Formação</h1>
            </div>
            <div className={style.lista}>
                {cursos.map(({node}) => (
                    <Curso ano={node.year} icon={node.icon}>{node.where}</Curso>
                ))}
            </div>
        </div>
    )
}

export default Formacao