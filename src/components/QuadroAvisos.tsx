import { maxHeight } from '@mui/system'
import React from 'react'
import * as styles from './quadroavisos.module.css'

type QuadroAvisosProps = {
  avisos: any
}

export default function QuadroAvisos({ avisos }: QuadroAvisosProps) {
  console.log('AVISOS--------->', avisos);
  
  return (
    <div>
      <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}>
        Avisos
      </p>
      <div className={styles.container}>
        <div className={styles.quadro}>

          <div className={styles.avisos} dangerouslySetInnerHTML={{ __html: avisos.html}}
              style={{
                color: 'white',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '112.4%',
                padding: '10px',
              }}
          />
          </div>
      </div>
    </div>
  )
}
