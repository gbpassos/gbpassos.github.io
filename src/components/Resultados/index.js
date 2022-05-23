import * as React from 'react'
import { PortableText } from '@portabletext/react';
import Botao from '../Botao'
import Card from '../Card'
import * as style from './resultados.module.scss'

/** @typedef {{node: {titulo: string, descricao: string}}} Resultado*/

/**
 * 
 * @param {{resultados: Resultado[]}} data
 * @returns 
 */

const Resultados = ({resultados}) => {
    // const botoes = ["Todos",...new Set(resultados.map(res => res.categoria))]
    return (
        <div className={style.container}>
            <h1 className={style.title}>Principais Resultados</h1>
            {/* <div className={style.tipos}>
                {
                    botoes.map((botao) => (
                        <Botao label={botao}/>
                    ))
                }
            </div> */}
            <div className={style.lista}>
                {
                    resultados.map(({node}) => (
                        <Card titulo={node.titulo} link="/" imageSrc={node.image.asset.resize.src} gatsbyImageData={node.image.asset.gatsbyImageData}>
                            <PortableText value={node.descricao} />
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Resultados