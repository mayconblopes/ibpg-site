import { maxHeight } from '@mui/system'
import React from 'react'

type QuadroAvisosProps = {
  avisos: Array<string>
}

export default function QuadroAvisos({ avisos }: QuadroAvisosProps) {
  return (
    <div>
      <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}>
        Avisos
      </p>
      <div
        style={{
          borderRadius: '10px',
          background: '#0299D4',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          padding: '15px 15px',
        }}
      >
        <div
          style={{
            maxHeight: '120px',
            overflow: 'scroll',
          }}
        >

          {avisos.map((aviso, index) => (
            <p
              key={index}
              style={{
                color: 'white',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '112.4%',
                padding: '10px',
              }}
              >
              {index+1 +  '. ' + aviso}
            </p>
          ))}
          </div>
      </div>
    </div>
  )
}
