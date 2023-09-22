import { maxHeight } from '@mui/system'
import React from 'react'
import * as styles from './quadroavisos.module.css'
import MyCarousel from './MyCarousel'
import Evento from './Evento'
import Carousel from 'react-material-ui-carousel'

type QuadroAvisosProps = {
  avisos: any
}

export default function QuadroAvisos({ avisos }: QuadroAvisosProps) {
  let paragraphs = avisos.html
  // paragraphs = paragraphs.replace(/[<p>\n]/g,'').replace(/<\/p>/g, '||')
  // paragraphs = paragraphs.replace(/<[^>]*>/g, '')
  paragraphs = paragraphs.split('\n')
  console.log(paragraphs)

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
            items={paragraphs.map((p: string, i: number) => (
              <p
                key={i}
                style={{textAlign: 'center'}}
              >
                <div dangerouslySetInnerHTML={{ __html: p }}/>
                </p>
            ))}
          >
            </MyCarousel>
        </div>
      </div>
    </div>
  )
}
