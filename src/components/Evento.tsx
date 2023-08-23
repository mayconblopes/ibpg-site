import React, { Fragment } from 'react'
import * as styles from './evento.module.css'
import EventoSample from '../assets/evento-sample.png'

export default function Evento() {
  return (
    <Fragment>
      <p style={{ fontWeight: 'bold', alignSelf: 'start', marginLeft: '7.5%' }}>Eventos</p>
      <div className={styles.container}>
        <img className={styles.cover} src={EventoSample} alt='' />
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Ele virá!</h2>
          <h2 className={styles.date}> Dias 26 e 27 de Agosto</h2>
          <p style={{ fontWeight: 'bold' }}>Saiba mais</p>
        </div>
      </div>
    </Fragment>
  )
}
