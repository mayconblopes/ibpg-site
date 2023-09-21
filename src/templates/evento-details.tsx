import React from 'react'
import Layout from '../components/Layout'
import * as styles from './details.module.css'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

export default function EventoDetails({ data }: any) {
  const coverName = data.markdownRemark.frontmatter.eventCover
  const coverFluid = data.allImageSharp.nodes.filter(
    (node: any) => node.fluid.originalName === coverName
  )[0].fluid

  console.log(data);
  

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>{data.markdownRemark.frontmatter.eventTitle}</h1>
        <div className={styles.cover}>
          <Img fluid={coverFluid} />
        </div>
        <div className={styles.details} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
        <Link to='/' style={{ textDecoration: 'underline' }}>Voltar</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query EventDetailQuery($eventSlug: String) {
    markdownRemark(frontmatter: { eventSlug: { eq: $eventSlug } }) {
      frontmatter {
        eventSlug
        eventCover
        eventDate
        eventTitle
      }
      html
    }
    allImageSharp {
      nodes {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`