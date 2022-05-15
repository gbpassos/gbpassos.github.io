import * as React from 'react'
import * as style from './atividade.module.scss'

const Atividade = ({titulo, tags, children}) => {
    return (
        <div className={style.atividade}>
            <h2>{titulo}</h2>
            <div>
                {children}
            </div>
            <div className={style.tag_container}>
                {tags && tags.map((tag) => (
                    <button className={style.tag}>{tag.trim()}</button>
                ))}
            </div>
            <div className={style.showmore}>Mais</div>
        </div>
    )
}

export default Atividade