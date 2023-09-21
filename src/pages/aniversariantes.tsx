import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Layout from '../components/Layout'
import * as styles from './aniversariantes.module.css'

export default function Aniversariantes({ data }: any) {

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
            ANIVERSARIANTES DO MÊS
          </h1>
          <div>
            <em>
              Desejamos a todos os nossos irmãos e irmãs que fazem aniversário
              neste mês, uma vida de bençãos e muitas felicidades!
            </em>
            <div className={styles.aniversariantes}
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
    markdownRemark(frontmatter: { type: { eq: "aniversariantes" } }) {
      html
    }
  }
`
