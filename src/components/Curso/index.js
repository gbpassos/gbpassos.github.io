import * as React from 'react'
import { Icon } from '@iconify/react'
import * as style from './curso.module.scss'

const Curso = ({ano, icon, children}) => {
    return (
        <div className={style.container}>
            <Icon icon={icon} className={style.icon}/>
            <div className={style.descricao}><b>{ ano }</b></div>
            <div className={style.descricao}>{ children }</div>
        </div>
    )
}

export default Curso