import React from 'react'
import Empresa from "../Empresa"
import * as style from './grupoempresas.module.scss'

const GrupoEmpresa = (props) => {
    const { empresas } = props
    return (
        <div className={style.grupo}>
        {empresas.map(({node}) => (
            <Empresa node={node}/>
        ))}
        </div>
      )
}

export default GrupoEmpresa