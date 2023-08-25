import React, { Fragment } from 'react'
import * as styles from './evento.module.css'
// import EventoSample from '../assets/evento-sample.png'

export type EventoProps = {
    title: string
    date: string
    cover: string
}

export default function Evento({title, date, cover}: EventoProps) {

  return (
    <Fragment>
      <p style={{ fontWeight: 'bold', alignSelf: 'start', fontSize: '14px' }}>
        Eventos
      </p>
      <div className={styles.container}>
        <img className={styles.cover} src={cover} alt='' />
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>{title}</h2>
          <h2 className={styles.date}>{date}</h2>
          <p style={{ fontWeight: 'bold' }}>Saiba mais</p>
        </div>
      </div>
    </Fragment>
  )
}
