import React from 'react'

type IBPGNewsProps = {
  videoURL: string
}

export default function IBPGNews({ videoURL }: IBPGNewsProps) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}>
        IBPG News
      </p>
      <iframe
        height='100%'
        src={videoURL}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        style={{
          borderRadius: '10px', maxWidth: '80%',
          // border: '1px solid black',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
        }}
      ></iframe>
    </div>
  )
}
