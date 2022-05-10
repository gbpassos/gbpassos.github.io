import * as React from 'react'
import {Link} from 'gatsby'
import * as style from './card.module.scss'

const Card = ({titulo, link, children}) => {
    return (
        <div className={style.card}>
            <Link to={"artigos/" + link}><h2>{titulo}</h2></Link>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card