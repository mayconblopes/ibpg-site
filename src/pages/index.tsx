import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import MyCarousel from '../components/MyCarousel'
import QuadroAvisos from '../components/QuadroAvisos'
import IBPGNews from '../components/IBPGNews'
import CultosOnline from '../components/CultosOnline'
import { graphql } from 'gatsby'
import * as styles from './index.module.css'
import Destaque from '../components/Destaque'
import EventosCarrossel from '../components/EventosCarrossel'
import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function Home({ data }: any) {
  const avisos = data.allMarkdownRemark.nodes.filter(
    (node: any) => node.frontmatter.type === 'avisos'
  )[0]


  return (
    <Layout>
     

      <Banner />
      <div className={styles.indexContainer}>
        <div className={styles.section}>
          <EventosCarrossel />
        
        </div>
        <div className={styles.section}>
          <QuadroAvisos avisos={avisos} />
        </div>

        <div
          className={styles.section}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <Destaque
            title='Escola de Música Louvart'
            banner='banner_louvart.webp'
            linkTo='/louvart'
          />

          <Destaque
            title='Curso de Panificação'
            banner='banner_panificacao.webp'
            linkTo='/panificacao'
          />

          <Destaque
            title='Funcional Kids'
            banner='banner_funcional.webp'
            linkTo='/funcional'
          />
        </div>

        <div className={styles.section}>
          <IBPGNews />
        </div>

        <div className={styles.section}>
          <CultosOnline />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AvisosQuery {
    allFile(filter: { dir: { regex: "/event-cover/" } }) {
      nodes {
        relativePath
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { in: ["evento", "avisos"] } } }
    ) {
      nodes {
        frontmatter {
          eventCover
          eventDate
          eventSlug
          eventTitle
          type
        }
        html
      }
    }
  }
`
