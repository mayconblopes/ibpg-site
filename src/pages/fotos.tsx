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
  const [img, setImg] = useState({} as FluidObject | FluidObject[]) 

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


  return (
    <Layout>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onClick={handleOpenModal}
      >
        <div style={modalStyle}>

          <Img fluid={img} />
        </div>
      </Modal>
      <h1 style={{ textAlign: 'center' }}>Galeria de fotos</h1>
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
          padding: '15px 0',
          overflow: 'scroll',
        }}
      >
        {fotos.map((foto, index) => (
          <div
            key={index}
            style={{ width: '45%', height: 'auto' }}
            onClick={() => handleOpenModal(foto.childrenImageSharp[0].fluid)}
          >
            <Img fluid={foto.childrenImageSharp[0].fluid} />
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
