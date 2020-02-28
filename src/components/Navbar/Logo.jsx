import React from 'react';
import logo from '../../assets/logoLight.svg';
import styles from './Logo.module.css'; 

const Logo = () => {
    return (
       <a href="home" className={ styles.logo }>
           <img src={logo} alt="..."/>
       </a> 
    )
}

export default Logo;