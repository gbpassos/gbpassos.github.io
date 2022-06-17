import React from 'react'
import * as styles from "./contato.module.scss"
import Header from "../components/Header"

const Agradecimento = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <h3>Agradecemos o seu contato e retornaremos assim que possível.</h3>
            
        </div>
    )
}

export default Agradecimento