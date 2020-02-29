import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import lightTheme from './Light.module.css'
import darkTheme from './Night.module.css'

const Home = () => {
    const { dark } = useContext(ThemeContext);
    const styles = dark ? darkTheme : lightTheme;

    return (
        <section id="home"className={styles.home}>
            
        </section>
    )
}

export default Home;