import { Link } from 'gatsby'
import React, { Fragment, useEffect, useState } from 'react'

type CultosOnlineProps = {
  cultosURLs: Array<string>
}

export default function CultosOnline() {
  // channel_id = UCbMDaos_DocqABRDVKcW23Q
  const channelURL = encodeURIComponent(
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCbMDaos_DocqABRDVKcW23Q'
  )
  const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`

  const [ultimos4cultos, setUltimos4cultos] = useState([
    {
      title: '',
      pubDate: '',
      link: '',
    },
  ])

  useEffect(() => {
    fetch(reqURL)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setUltimos4cultos(result.items.slice(0, 4))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    console.log(ultimos4cultos)
  }, [ultimos4cultos])

  return (
    <Fragment>
      <p
        style={{
          fontWeight: 'bold',
          alignSelf: 'start',
          fontSize: '14px',
        }}
      >
        Últimos cultos Online
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFF1D0',
          padding: '20px 0px',
          borderRadius: '10px',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          marginBottom: '25px',
        }}
      >
        {ultimos4cultos.map((video, index) => (
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <iframe
              key={index}
              // height='90px'
              width='85%'
              src={`https://www.youtube.com/embed/${video.link.split('v=')[1]}`}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              style={{
                margin: '5px',
              }}
            ></iframe>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '8px',
                color: '#272635',
                width: '70%',
                marginBottom: '15px',
                marginLeft: '5px',
              }}
            >
              {video.title}
            </p>
          </div>
        ))}

        <Link
          to='https://www.youtube.com/@igrejabatistaemparqueguaru3181/streams'
          target='_blank'
          style={{
            textDecoration: 'underline',
            fontWeight: 'bold',
            color: 'rgb(2, 153, 212)',
          }}
        >
          Veja todos os cultos online aqui
        </Link>
      </div>
    </Fragment>
  )
}
