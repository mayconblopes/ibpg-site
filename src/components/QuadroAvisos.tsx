import React, { useContext, useEffect, useState } from 'react'
import * as styles from './quadroavisos.module.css'
import MyCarousel from './MyCarousel'
import { PantryContext, PantryContextType } from '../context/PantryContext'
import showdown from 'showdown'

type QuadroAvisosProps = {
  avisos: any
}

export default function QuadroAvisos({ avisos }: QuadroAvisosProps) {
  //use of graphQl for avisos
  let paragraphs = avisos.html
  paragraphs = paragraphs.split('\n')

  //use of pantryAPI for avisos
  const context: PantryContextType = useContext(PantryContext)


  const markdownConverter = new showdown.Converter()

  return (
    <div>
      <p style={{ fontWeight: 'bold', textAlign: 'left', fontSize: '16px' }}>
        Avisos
      </p>
      <div className={styles.container}>
        <div className={styles.quadro}>
          <div
            className={styles.avisos}
            style={{
              color: 'white',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '112.4%',
              padding: '10px',
            }}
          />

          <MyCarousel
            items={
              //if paragraphs[0], then 'avisos' is defined in markdown file, so we have to use graphql instead of pantry API
              paragraphs[0]
                ? paragraphs.map((p: string, i: number) => (
                    <div
                      key={i}
                      className={styles.avisos}
                      style={{ textAlign: 'center' }}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))
                : context.avisosFromPantry.map((p: string, i: number) => (
                    <div
                      key={i}
                      className={styles.avisos}
                      style={{ textAlign: 'center' }}
                      dangerouslySetInnerHTML={{ __html: markdownConverter.makeHtml(p) }}
                    />
                  ))
            }
          ></MyCarousel>
        </div>
      </div>
    </div>
  )
}
