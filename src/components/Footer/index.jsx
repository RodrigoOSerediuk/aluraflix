import React from "react"
import styles from "./Footer.module.css"
import LogoFooter from "./LogoFooter.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <img src={LogoFooter} alt="Logo Footer" className={styles.logoF} />
            <Link to={"https://github.com/RodrigoOSerediuk"}>
                <p className={styles.text}>
                    &copy; 2024 - Rodrigo O Serediuk
                </p>
            </Link>
        </footer>
    )
}

export default Footer
