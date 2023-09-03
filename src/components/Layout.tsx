import React, { Fragment } from 'react'
import Navbar from './Navbar'
import '../globals.css'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Helmet>
        <html lang='pt-br' />
        <title>{data.site.siteMetadata.title}</title>
        <meta name='description' content={data.site.siteMetadata.description} />
      </Helmet>
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Navbar />

        <div
          style={{
            height: `calc(${window.innerHeight}px - 170px)`,
            overflow: 'scroll',
          }}
        >
          {children}
        </div>

        <footer
          style={{
            height: '80px',
            background: '#0299D4',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <p
            style={{
              width: '67%',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            Igreja Batista em Parque Guarus
          </p>
          <p style={{ width: '67%', color: 'white', fontSize: '12px' }}>
            Av. Cristovan Lysandro Albernaz, 245 - Pq Guarus, Campos/RJ
          </p>
        </footer>
      </div>
    </Fragment>
  )
}
