import React from 'react'
import { Link } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import { Icon } from '@iconify/react'
import * as styles from './header.module.scss'

const header = () => {
    return (
        <div className={styles.container}>
            <Link to="/"><StaticImage className={styles.foto} src="../../assets/IMG_20190505_212405544 1.png" alt="foto" width={60} aspectRatio="1/1"/></Link>
            <div>Gilberto Passos Lima</div>
            <Icon icon="bx:menu" width="60px"/>
        </div>
    )
}

export default header