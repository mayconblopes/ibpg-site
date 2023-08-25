import React, { Fragment, useState } from 'react'
import CharmMenuHamburger from '../assets/CharmMenuHamburger'
import logo from '../assets/logo.png'
import * as styles from './navbar.module.css'
import { Link } from 'gatsby'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenuClick() {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  return (
    <Fragment>
      <div className={styles.menu} style={{ display: menuOpen ? 'flex' : 'none' }}>
        <Link to='/'>Home</Link>
        <Link to='/'>Galeria de fotos</Link>
        <Link to='/'>Documentos</Link>
        <Link to='/'>Aniversariantes</Link>
        <Link to='/'>Sobre</Link>
          <img className={styles.logo} src={logo} alt='logo da IBPG' />
      </div>
    <nav className={styles.navbar}>
      <CharmMenuHamburger className={styles.menuIcon} onClick={handleMenuClick}/>
      <h1 className={styles.title}>Igreja Batista em Parque Guarus</h1>
      <img className={styles.logo} src={logo} alt='logo da IBPG' />
    </nav>
    </Fragment>
  )
}
