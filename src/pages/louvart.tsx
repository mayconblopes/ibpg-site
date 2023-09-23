import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Louvart({ data }: any) {
    
  const conteudo = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Helmet>
       <title>Escola de Música Louvart</title>
        <meta name='description' content={conteudo[0].html.replace(/<[^>]*>/g, '').slice(0, 300)} />
      </Helmet>
      <img
        src='/banner_louvart.webp'
        alt='banner louvart'
        style={{ width: '100%' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          padding: '0 15%',
        }}
      >
        <div
          className='beautifulText'
          dangerouslySetInnerHTML={{ __html: conteudo[0].html }}
        ></div>
        <Link to='/' style={{ textDecoration: 'underline' }}>Voltar</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SobreQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "louvart" } } }) {
      nodes {
        frontmatter {
          updated
          title
        }
        html
      }
    }
  }
`
