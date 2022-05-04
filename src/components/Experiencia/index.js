import * as React from 'react'
import Atividade from '../Atividade'

const experienciaContainer = {
    "background-color": "#C1D37F",
    display: "flex",
    "flex-direction": "column",
    padding: "2%",
}

const titleStyle = {
    "text-align": "center"
}
const listaStyle = {
    display: "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap",
    "justify-content": "space-around",
    "gap": "10px",
}

const Experiencia = () => {
    return (
        <div style={experienciaContainer}>
            <div style={titleStyle}>
                <h1>Experiência</h1>
            </div>
            <div style={listaStyle}>
                <Atividade titulo="Desenvolvimento, testes, instalação e produção de sistemas embarcados" tags="sistemas embarcados; PD&amp;I">Durante os primeiros anos trabalhando como técnico em eletrônico e estagiário de engenharia eletrônica, desenvolvi, aprimorei, testei e realizei outras atividades relacionadas a fabricação e testes de sistemas monitorados remotos, na empresa que desenvolveu o primeiro prédio inteligente de Curitiba/PR.</Atividade>
                <Atividade titulo="Implantação de sistemas de gestão ISO 9001" tags="sistema de gestão;ISO 9001">Como integrante da equipe de implantação de sistema de gestão ISO 9001, escrevi procedimentos, desenvolvi fluxos de processo e trabalhei com automação para atingir os objetivos e metas definidos pela alta direção da empresa.</Atividade>
                <Atividade titulo="Pesquisa, desenvolvimento e inovação em laboratórios de metrologia" tags="metrologia; PD&amp;I">Essa foi um dos períodos em que agreguei mais conhecimento técnico no meu repertório. Participei de vários congressos e capacitações relacionadas a metrologia científica e legal, inclusive oferecendo cursos para outras empresas, como aos técnicos do laboratório das Usinas de Agra.</Atividade>
                <Atividade titulo="Gerente de Laboratório de metrologia científica e industrial" tags="metrologia; gestão">Com a experiência no laboratório, fui convidado a ser gerente das atividades acreditadas pelo INMETRO, ao mesmo tempo que executava avaliações de outros laboratórios, atuando como um dos avaliadores técnicos, nas áreas de calibração em tempo &amp; frequência, temperatura e eletricidade.</Atividade>
                <Atividade titulo="Gerente de Incubadora de empresas de base tecnológica" tags="empreendedorismo; gestão; inovação; mentoria">Agora focado no apoio às empresas inovadoras de base tecnológica, como gerente da incubadora, orientei e ajudei a desenvolver várias empresas startups, muitas delas de impacto significativo no mercado. </Atividade>
            </div>
        </div>
    )
}

export default Experiencia