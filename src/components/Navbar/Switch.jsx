import React, { useContext } from 'react'
import night from './Night.module.css'
import light from './Light.module.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const Switch = () => {
    const { dark, toggleTheme } = useContext(ThemeContext);
    const styles = dark ? night : light ;

    return (

            <label 
                className={ styles.switch }
                for="theme"
                >
                <span></span>
                <input 
                    type="checkbox" 
                    id="theme"
                    checked={ dark }
                    onChange={ toggleTheme }
                />   
            </label>
    
    )
}

export default Switch;