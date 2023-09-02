import React, { Fragment } from 'react'
import * as styles from './evento.module.css'
import Img, { FluidObject } from 'gatsby-image'
import { Link } from 'gatsby'

export type EventoProps = {
  eventTitle: string
  eventDate: string
  eventSlug: string
  eventCover: any
}

export default function Evento({
  eventTitle,
  eventDate,
  eventSlug,
  eventCover,
}: EventoProps) {

  return (
    <Fragment>
      <p style={{ fontWeight: 'bold', alignSelf: 'start', fontSize: '14px' }}>
        Eventos
      </p>
      <Link to={`/eventos/${eventSlug}`}>
      <div className={styles.container}>
        <div style={{ width: '100px' }}>
          <Img fluid={eventCover} imgStyle={{width:'auto', height: '110px' }}/>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>{eventTitle}</h2>
          <h2 className={styles.date}>{eventDate}</h2>
          <p style={{ fontWeight: 'bold' }}>Saiba mais</p>
        </div>
      </div>
      </Link>
    </Fragment>
  )
}
