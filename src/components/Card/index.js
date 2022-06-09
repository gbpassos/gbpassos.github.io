import * as React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as style from './card.module.scss'

/**
 * 
 * @param {{titulo: string, links: any[], children: any[], imageSrc: string, gatsbyImageData: any}} param0 
 */
const Card = ({titulo, links, children, imageSrc, gatsbyImageData}) => {
    return (
        <div className={style.card}>
            {/* {imageSrc && <img src={imageSrc} alt={titulo}/>} */}
            <GatsbyImage image={gatsbyImageData} alt={titulo}/>
            {links.filter(link => link._type === "post").map( link => (
                <Link to={"artigo/" + link.slug.current}><h2>{titulo}</h2></Link>
            ))}
            <div>
                {children}
            </div>
            {links.filter(link => link._type === "arquivo").map( link => (
                <a href={link.file.asset.url}>{link.name}</a>
            ))}
        </div>
    )
}

export default Card