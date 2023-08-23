import React from 'react'
import CharmMenuHamburger from '../assets/CharmMenuHamburger'
import logo from '../assets/logo.png'
import * as styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <CharmMenuHamburger className={styles.menuIcon}/>
      <h1 className={styles.title}>Igreja Batista em Parque Guarus</h1>
      <img className={styles.logo} src={logo} alt='logo da IBPG' />
    </nav>
  )
}
