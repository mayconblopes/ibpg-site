import React, { Fragment, useState } from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { Modal } from '@mui/base'

type IFoto = {
  relativePath: string
  childrenImageSharp: {
    fluid: any
  }[]
}

export default function Fotos({ data }: any) {
  const fotos: IFoto[] = data.allFile.nodes
  console.log(fotos)
  console.log(fotos[0].childrenImageSharp[0].fluid)

  const [open, setOpen] = useState(false)
  const [img, setImg] = useState({} as FluidObject)

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(min(400px, 98vw))',
    maxHeight: '90vh',
    boxShadow: '24',
  }

  function handleOpenModal(fluid: any) {
    setOpen(!open)
    setImg(fluid)
  }

  function handleNextImage() {
    const actual = fotos.filter(
      (foto: any) => foto.childrenImageSharp[0].fluid.base64 === img.base64
    )[0]
    const next = fotos[fotos.indexOf(actual) + 1]
    console.log(fotos.indexOf(actual))
    console.log(fotos.indexOf(next))

    if (fotos.indexOf(next) >= 0) {
      setImg(next.childrenImageSharp[0].fluid)
    }
  }

  function handlePrevImage() {
    const actual = fotos.filter(
      (foto: any) => foto.childrenImageSharp[0].fluid.base64 === img.base64
    )[0]
    const prev = fotos[fotos.indexOf(actual) - 1]
    console.log(fotos.indexOf(actual))
    console.log(fotos.indexOf(prev))

    if (fotos.indexOf(prev) >= 0) {
      setImg(prev.childrenImageSharp[0].fluid)
    }
  }

  return (
    <Layout>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle}>
          <div
            style={{
              backgroundColor: '#0299D4',
              border: '1px solid black',
              borderBottom: 'none',
            }}
          >
            <p
              onClick={handleOpenModal}
              style={{
                textAlign: 'right',
                cursor: 'pointer',
                marginRight: '10px',
                fontWeight: 'bold',
              }}
            >
              X
            </p>
          </div>
          <div
            onClick={handleNextImage}
            style={{
              cursor: 'pointer',
              border: '1px solid black',
              borderTop: 'none',
              borderBottom: 'none',
            }}
          >
            <Img fluid={img} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: '#0299D4',
              padding: '10px',
              border: '1px solid black',
              borderTop: 'none',
            }}
          >
            <p
              style={{
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              onClick={handlePrevImage}
            >
              {'<'}
            </p>
            <p>{'|'}</p>
            <p
              style={{
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              onClick={handleNextImage}
            >
              {'>'}
            </p>
          </div>
        </div>
      </Modal>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>GALERIA DE FOTOS</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '10px',
          background: '#0299D4',
          width: '85%',
          height: '100%',
          margin: 'auto',
          borderRadius: '10px',
          padding: '15px',
          overflow: 'scroll',
          boxSizing: 'border-box',
        }}
      >
        {fotos.map((foto, index) => (
          <div
            key={index}
            style={{ width: '45%', cursor: 'pointer' }}
            onClick={() => handleOpenModal(foto.childrenImageSharp[0].fluid)}
          >
            <Img fluid={foto.childrenImageSharp[0].fluid} imgStyle={{ borderRadius: '20px', maxHeight: '200px' }}/>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query FotosQuery {
    allFile(filter: { dir: { regex: "/galeria-de-fotos/" } }) {
      nodes {
        relativePath
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
