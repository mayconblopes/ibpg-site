import React, { useEffect, useState } from 'react'

export default function IBPGNews() {
  // channel_id = UCbMDaos_DocqABRDVKcW23Q
  // playlist id = PLyUOWLaRVGTUoTX5xjOeYLwut0iBaJ_Ix
  const channelURL = encodeURIComponent(
    // 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLyUOWLaRVGTUoTX5xjOeYLwut0iBaJ_Ix'
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCbMDaos_DocqABRDVKcW23Q'
  )
  const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`

  const [ibpgNews, setIbpgNews] = useState({
    link: '',
  })

  useEffect(() => {
    let orderedResult: any[] = []

    fetch(reqURL)
      .then(response => response.json())
      .then(result => {
        console.log('RESULT IBPGNEWS--->', result)
        result.items.filter((video: any) => video.title.match(/IBPG/gi))
        .sort((a: any, b: any) => b.pubDate > a.pubDate)
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
    <>
      <p style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '20px' }}>
        IBPG News
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#0299D4',
            height: '250px',
            borderRadius: '10px',
            padding: '15px',
            boxSizing: 'border-box',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <iframe
            height='100%'
            src={`https://www.youtube.com/embed/${
              ibpgNews.link.split('v=')[1]
            }?rel=0`}
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
    </>
  )
}
