import * as React from 'react'
import { Icon } from '@iconify/react'

const containerStyle = {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    margin: "0px 10px",
    gap: "1em"
}

const descricaoStyle = {
    "font-family": ['Libre Franklin', 'sans-serif'],
    "font-style": "normal",
    "text-align": "center"
}

const iconStyle = {
    "font-size": "300%"
}

const Curso = ({ano, icon, children}) => {
    return (
        <div style={containerStyle}>
            <Icon icon={icon} style={iconStyle}/>
            <div style={descricaoStyle}>{ ano }</div>
            <div style={descricaoStyle}>{ children }</div>
        </div>
    )
}

export default Curso