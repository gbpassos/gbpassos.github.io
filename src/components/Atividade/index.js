import * as React from 'react'
import * as style from './atividade.module.scss'

const Atividade = ({titulo, tags, children}) => {
    return (
        <div className={style.atividade}>
            <h2>{titulo}</h2>
            <div>
                {children}
            </div>
            <div>
                {tags && tags.map((tag) => (
                    <button>{tag.trim()}</button>
                ))}
            </div>
        </div>
    )
}

export default Atividade