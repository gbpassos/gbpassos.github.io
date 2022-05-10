import * as React from 'react'
import Botao from '../Botao'
import Card from '../Card'
import * as style from './resultados.module.scss'


const Resultados = ({resultados}) => {
    const botoes = ["Todos",...new Set(resultados.map(res => res.categoria))]
    return (
        <div className={style.container}>
            <h1 className={style.title}>Principais Resultados</h1>
            <div className={style.tipos}>
                {
                    botoes.map((botao) => (
                        <Botao label={botao}/>
                    ))
                }
            </div>
            <div className={style.lista}>
                {
                    resultados.map((key) => (
                        <Card titulo={key.titulo} link={key.pagina}>{key.resumo}</Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Resultados