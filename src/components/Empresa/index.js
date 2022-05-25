import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PortableText } from '@portabletext/react';

const Empresa = (props) => {
    const { logo, descricao, nome } = props.node
    return (
        <div>
            <GatsbyImage image={logo.asset.gatsbyImageData} alt={nome} />
            <h3>{nome}</h3>
            <PortableText value={descricao} />
        </div>
    )
}

export default Empresa