import React, { Fragment } from 'react'

type CultosOnlineProps = {
  cultosURLs: Array<string>
}

export default function CultosOnline({ cultosURLs }: CultosOnlineProps) {
  return (
    <Fragment>
      <p style={{ fontWeight: 'bold', alignSelf: 'start', fontSize: '14px' }}>
        Cultos Online
      </p>
      <div
      style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',}}
      >
        {cultosURLs.map((url, index) => (


          <iframe
            height='90px'
            width='46.5%'
            src={url}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            style={{
              margin: '5px',
            }}
            ></iframe>
        ))}
      </div>
    </Fragment>
  )
}
