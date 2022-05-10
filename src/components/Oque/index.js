import * as React from 'react'
import icone from "@/assets/healthicons-factory-worker-outline@2x.svg"
import * as style from './oque.module.scss'

const Oque = ({children}) => {
    return (
        <div className={style.oQueContainer}>
            <div className={style.title}>
                <h1>O que faço</h1>
                <img src={icone} alt="icone"/>
            </div>
            <div className={style.descri}>
                {children}
            </div>
        </div>
    )
}

export default Oque