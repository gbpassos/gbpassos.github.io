import * as React from 'react'

const atividadeStyle = {
    "max-width": "400px",
    "min-width": "300px"
}

const Atividade = ({titulo, tags, children}) => {
    return (
        <div style={atividadeStyle}>
            <h2>{titulo}</h2>
            <div>
                {children}
            </div>
            <div>
                {tags && tags.split(';').map((tag) => (
                    <button>{tag.trim()}</button>
                ))}
            </div>
        </div>
    )
}

export default Atividade