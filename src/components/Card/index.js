import * as React from 'react'

const cardStyle = {
    "max-width": "400px",
    "min-width": "300px"
}

const Card = ({titulo, children}) => {
    return (
        <div style={cardStyle}>
            <h2>{titulo}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card