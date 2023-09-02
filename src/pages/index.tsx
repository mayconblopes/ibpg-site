import * as React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Evento from '../components/Evento'
import MyCarousel from '../components/MyCarousel'
import QuadroAvisos from '../components/QuadroAvisos'
import IBPGNews from '../components/IBPGNews'
import CultosOnline from '../components/CultosOnline'
import { graphql } from 'gatsby'

export default function Home({ data }: any) {
  const eventos = data.allMarkdownRemark.nodes
  const eventCovers = data.allFile.nodes

  return (
    <Layout>
      <Banner />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '85%' }}>
          <MyCarousel
            items={eventos.map((evento: any, i: any) => (
              <Evento
                key={i}
                {...evento.frontmatter}
                eventCover={
                  eventCovers.filter(
                    (cover: { relativePath: any }) =>
                      cover.relativePath.includes(evento.frontmatter.eventCover)
                  )[0].childrenImageSharp[0].fluid
                }
              />
            ))}
          />
        </div>
        <div style={{ marginTop: '20px', width: '85%' }}>
          <QuadroAvisos
            avisos={[
              'Curso de panificação com o Diácono Paulo Roberto: inscrição R$ 20,00 (na secretaria). Vagas limitadas!',
              'Curso de panificação com o Diácono Paulo Roberto: inscrição R$ 20,00 (na secretaria). Vagas limitadas!',
              'Curso de panificação com o Diácono Paulo Roberto: inscrição R$ 20,00 (na secretaria). Vagas limitadas!',
            ]}
          />
        </div>

        <div style={{ marginTop: '20px', width: '85%' }}>
          <IBPGNews videoURL='https://www.youtube.com/embed/EtWsrp4dnhE?si=uTkTJHVGyi-Uopu1' />
        </div>

        <div style={{ marginTop: '20px', width: '85%' }}>
          <CultosOnline />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query EventoQuery {
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
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "evento" } } }) {
      nodes {
        frontmatter {
          eventCover
          eventDate
          eventSlug
          eventTitle
        }
        html
      }
    }
  }
`
