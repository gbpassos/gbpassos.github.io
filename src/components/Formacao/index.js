import * as React from 'react'
import { Icon } from '@iconify/react'
import Curso from '../Curso'
// import {container, title, lista} from '../css/main.module.scss'
import './formacao.scss'

const Formacao = () => {
    return (
        <div class="container">
            <div class="title">
                <Icon icon="fluent:hat-graduation-20-regular"/>
                <h1>Formação</h1>
            </div>
            <div class="lista">
                <Curso ano="1993" icon="flat-color-icons:electronics">Técnico em Eletrônica CEFET-PR</Curso>
                <Curso ano="2000" icon="mdi:radio-tower">Engenharia Industrial Elétrica com ênfase em Eletrônica e Telecomunicações CEFET-PR</Curso>
                <Curso ano="2013" icon="la:industry">Mestre em Engenharia da Produção UFPR</Curso>
                <Curso ano="2010" icon="carbon:ai-results">Especialização em Gestão Estratégica de Tecnologia e Inovação UTFPR</Curso>
            </div>
        </div>
    )
}

export default Formacao