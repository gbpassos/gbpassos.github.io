import * as React from 'react'
import Botao from '../Botao'
import Card from '../Card'

const botoes = [
    "Todos",
    "Artigos",
    "Palestras",
    "Publicações",
    "Vídeos",
    "Cursos e Treinamentos",
    "Mentorias"
]

const cards = {
    "Os 3Es dos processos": "Porque é importante entender a expectativa do cliente na criação dos processos internos? É o que procuramos responder com esse artigo.",
    "Como você gerencia seu negócio: pela exceção ou pela regra?": "Nesse artigo abordamos o que pode acontecer ao incluir etapas nos processos e ao final damos algumas dicas.",
    "Cenários estratégicos de empreendedorismo": "O caderno é uma coletânia de artigos de trabalhos de vários autores apresentados durante as atividades do ano de 2014 da Incubadora Tecnológica do TECPAR."
}

const Resultados = () => {
    return (
        <div>
            <h1>Principais Resultados</h1>
            <div class="tipos">
                {
                    botoes.map((botao) => (
                        <Botao label={botao}/>
                    ))
                }
            </div>
            <div class="lista">
                {
                    Object.keys(cards).map((key) => (
                        <Card titulo={key}>{cards[key]}</Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Resultados