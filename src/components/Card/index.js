import * as React from 'react'

const Card = ({titulo, children}) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card