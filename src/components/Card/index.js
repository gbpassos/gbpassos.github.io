import * as React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as style from './card.module.scss'

const Card = ({titulo, link, children, imageSrc, gatsbyImageData}) => {
    return (
        <div className={style.card}>
            {/* {imageSrc && <img src={imageSrc} alt={titulo}/>} */}
            <GatsbyImage image={gatsbyImageData} alt={titulo}/>
            <Link to={"artigos/" + link}><h2>{titulo}</h2></Link>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card