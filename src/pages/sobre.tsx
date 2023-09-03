import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { display } from '@mui/system'

export default function Sobre({ data }: any) {
  const sobre = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div
        style={{
          padding: '0 15%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: '14px', marginTop: '20px' }}>
          SOBRE A IBPG
        </h1>
        <div className='beautifulText' dangerouslySetInnerHTML={{ __html: sobre[0].html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SobreQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "sobre" } } }) {
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
