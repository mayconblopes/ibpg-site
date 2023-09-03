import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Layout from '../components/Layout'

export default function Documentos({ data }: any) {

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          marginRight: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '85%',
          }}
        >
          <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>
            DOCUMENTOS
          </h1>
          <div>
            <div
              style={{ marginTop: '15px' }}
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AniversariantesQuery {
    markdownRemark(frontmatter: { type: { eq: "documentos" } }) {
      html
    }
  }
`
