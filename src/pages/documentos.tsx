import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Layout from '../components/Layout'

export default function Documentos({ data }: any) {
  const directories = data.allDirectory.nodes.map((obj: any) => obj.name)
  const files = data.allFile.nodes.sort((a: any, b: any) => b.name.localeCompare(a.name))
  console.log(files)

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
          {directories.map((dir: any) => (
            <div key={dir}>
              <h2>{dir.toUpperCase()}</h2>
              {files.map((file: any) => (
                <div key={file.name}>
                  {file.relativePath.includes(dir) && (
                    <>
                      <a href={file.publicURL} target='_blank'>
                        {file.name}
                      </a>
                    </>
                  )}
                </div>
              ))}
              <br />
              <hr/>
              <br />
            </div>
          ))}
          {/* <div>
            <div
              style={{ marginTop: '15px' }}
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query DocumentosQuery {
    markdownRemark(frontmatter: { type: { eq: "documentos" } }) {
      html
    }

    allDirectory(
      filter: {
        absolutePath: { regex: "/documents/" }
        name: { ne: "documents" }
      }
    ) {
      nodes {
        name
      }
    }
    allFile(filter: { absolutePath: { regex: "/documents/" } }) {
      nodes {
        relativePath
        name
        publicURL
      }
    }
  }
`
