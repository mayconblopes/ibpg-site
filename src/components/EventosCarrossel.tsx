import React, { Fragment, useState } from 'react'
import { useContext } from 'react'
import MyCarousel from './MyCarousel'
import { PantryContext, PantryContextType } from '../context/PantryContext'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from './evento.module.css'
import { Modal, Typography } from '@mui/material'
import { Box, color } from '@mui/system'
import showdown from 'showdown'

export type EventoProps = {
  eventTitle: string
  eventDate: string
  eventHTML: string
  eventCover: any
}

export default function EventosCarrossel() {
  const [openModal, setOpenModal] = useState(false)
  const [modalEventTitle, setModalEventTitle] = useState('')
  const [modalEventDate, setModalEventDate] = useState('')
  const [modalEventCover, setModalEventCover] = useState('')
  const [modalEventHTML, setModalEventHTML] = useState('')

  const markdownConverter = new showdown.Converter()

  function handleOpenModal(
    eventTitle: string,
    eventCover: string,
    eventHTML: string
  ) {
    setModalEventTitle(eventTitle)
    setModalEventCover(eventCover)
    setModalEventHTML(
      eventHTML
        .split('\n')
        .map((line: string) => markdownConverter.makeHtml(line))
        .join('\n')
    )
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
  }

  const context: PantryContextType = useContext(PantryContext)

  // local component
  function Evento({
    eventTitle,
    eventDate,
    eventCover,
    eventHTML,
  }: EventoProps) {
    return (
      <Fragment>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          sx={{
            width: 'calc(min(90%,600px))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <>
            <Typography
              variant='h4'
              color={'white'}
              onClick={handleCloseModal}
              align='right'
              style={{ cursor: 'pointer' }}
            >
              X
            </Typography>
            <Box
              style={{
                overflow: 'scroll',
                backgroundColor: 'black',
                paddingBottom: '20px',
              }}
            >
              <img
                src={modalEventCover}
                style={{ width: '100%' }}
                alt='event cover'
              />

              <Box
                style={{
                  padding: '20px',
                }}
              >



              <Typography
                id='modal-modal-title'
                variant='h6'
                component='h2'
                color={'white'}
              >
                {modalEventTitle}
              </Typography>
              <Typography id='modal-modal-description' color={'white'}>
                {modalEventDate}
              </Typography>
              <div
                className='beautifulWhiteText'
                dangerouslySetInnerHTML={{
                  __html: modalEventHTML,
                }}
              />
              </Box>
            </Box>
          </>
        </Modal>
        <p style={{ fontWeight: 'bold', alignSelf: 'start', fontSize: '16px' }}>
          Eventos
        </p>

        <div
          className={styles.container}
          onClick={() => handleOpenModal(eventTitle, eventCover, eventHTML)}
        >
          <div style={{ width: '150px' }}>
            <img
              src={eventCover}
              style={{ width: 'auto', height: '150px' }}
              alt='event cover'
            />
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.title}>{eventTitle}</h2>
            <h2 className={styles.date}>{eventDate}</h2>
            <p style={{ fontWeight: 'bold' }}>Saiba mais</p>
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <MyCarousel
      items={context.eventosFromPantry.map((evento: any, i: any) => (
        <Evento key={i} {...evento} eventCover={evento.eventCover} />
      ))}
    />
  )
}
