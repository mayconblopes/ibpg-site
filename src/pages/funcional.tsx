import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Funcional({ data }: any) {
  
  const conteudo = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Helmet>
       <title>Funcional Kids</title>
        <meta name='description' content={conteudo[0].html.replace(/<[^>]*>/g, '').slice(0, 300)} />
        <meta property='og:image' content={`http://igrejabatistapg.org/banner_funcional.webp`} />
      </Helmet>
      <img
        src='/banner_funcional.webp'
        alt='banner do funcional kids'
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
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "funcional" } } }) {
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
