import React, { useEffect, useState } from 'react'

export default function IBPGNews() {

    // channel_id = UCbMDaos_DocqABRDVKcW23Q
    // playlist id = PLyUOWLaRVGTUoTX5xjOeYLwut0iBaJ_Ix
    const channelURL = encodeURIComponent(
      'https://www.youtube.com/feeds/videos.xml?playlist_id=PLyUOWLaRVGTUoTX5xjOeYLwut0iBaJ_Ix'
    )
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`
  
    const [ibpgNews, setIbpgNews] = useState(
      {
        link: '',
      },
    )
  
    useEffect(() => {
      fetch(reqURL)
        .then(response => response.json())
        .then(result => {
          // console.log('RESULT IBPGNEWS--->', result)
          setIbpgNews(result.items[0])
        })
        .catch(error => {
          console.log(error)
        })
    }, [])
  
    useEffect(() => {
      console.log(ibpgNews)
    }, [ibpgNews])
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}>
        IBPG News
      </p>
      <div
        style={{
          backgroundColor: '#0299D4',
          height: '180px',
          borderRadius: '10px',
          padding: '15px',
          boxSizing: 'border-box',
        }}
      >
        <iframe
          height='100%'
          src={`https://www.youtube.com/embed/${ibpgNews.link.split('v=')[1]}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          style={{
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            maxWidth: '100%',
          }}
        ></iframe>
      </div>
    </div>
  )
}
