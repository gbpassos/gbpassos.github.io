import React from 'react'
import styles from './aboutme.module.scss'

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <img className={styles.foto} src={require('./IMG_20190505_212405544 1.png')} alt="me"/>
            </div>
            <div className={styles.text}>
                <h1>Gilberto Passos Lima</h1>
                <h2>Formação</h2>
                <ul>
                    <li>Mestre em Engenharia da Produção (UFPR)</li>
                    <li>Especialista em Gestão Estratégia de Tecnologia e Inovação (UTFPR)</li>
                    <li>Engenheiro Industrial Eletricista com ênfase em Eletrônica e Telecomunicações (UTFPR)</li>
                    <li>Tecnico em Eletrônica (CEFET-PR)</li>
                </ul>
                <h2>Experiência</h2>
                <ul>
                    <li>Gestão de projetos</li>
                    <li>Metrologia</li>
                    <li>Gestão de empresas</li>
                    <li>Startups</li>
                    <li>Inovação</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe