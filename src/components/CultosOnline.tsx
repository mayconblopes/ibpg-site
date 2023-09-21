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
    let names: string[] = []
    let last4cultos: any[] = []

    fetch(reqURL)
      .then(response => response.json())
      .then(result => {
        names = result.items.map((item: any) => item.title)
        // remove duplicates
        names = names.filter(
          (name: string, index: number) => names.indexOf(name) === index
        )

        // select last 4 cultos
        names
          .filter((name: string) => name.match(/culto/gi))
          .slice(0, 4)
          .forEach(name => {
            last4cultos.push(
              result.items.filter((item: any) => item.title === name)[0]
            )
          })

        setUltimos4cultos(last4cultos)
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
          backgroundColor: '#0299D4',
          padding: '20px 0px',
          borderRadius: '10px',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          marginBottom: '20px',
        }}
      >
        {ultimos4cultos.map((video, index) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px',
              boxSizing: 'border-box',
            }}
            key={index}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.link.split('v=')[1]}?rel=0`}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              style={{
                margin: '5px',
                borderRadius: '10px',
                maxWidth: '100%',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            ></iframe>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '12px',
                color: '#fff',
                width: '90%',
                // marginBottom: '15px',
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
            color: '#fff',
            fontSize: '10px',
            marginTop: '15px',
          }}
        >
          Veja todos os cultos online aqui
        </Link>
      </div>
    </Fragment>
  )
}
