import React, { useContext } from 'react'
import lightMode from './Light.module.css'
import darkMode from './Night.module.css'
import Switch from './Switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ThemeContext } from '../../contexts/ThemeContext'


const Navbar = () => {
    const { dark } = useContext(ThemeContext);

    const styles = dark ? darkMode : lightMode; 

    return (
        <nav className={styles.nav}>
            <ul className={ styles['nav-links'] }>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Hire me!</a></li>
            </ul>
            <ul className={ styles['social-links'] }>  
                <li>
                    <a 
                        href="https://www.linkedin.com/in/manuel-ignacio-sanchez/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />    
                    </a> 
                </li>
                <li>
                    <a 
                        href="https://github.com/NachoSanchez" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
            <Switch />
        </nav>
    )
}

export default Navbar;