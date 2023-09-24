import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { Modal } from '@mui/base'
import { Button } from '@mui/material'

type IFoto = {
  relativePath: string
  childrenImageSharp: {
    fluid: any
  }[]
}

export default function Fotos({ data }: any) {
  const fotos: IFoto[] = data.allFile.nodes
  console.log('fotos--->', fotos)
  // console.log(fotos[0].childrenImageSharp[0].fluid)

  const directories = data.allDirectory.nodes.sort((a: any, b: any) => a.name.localeCompare(b.name))
  console.log('directories --->', directories)

  const [open, setOpen] = useState(false)
  const [img, setImg] = useState({} as FluidObject)
  const [filter, setFilter] = useState('outras')
  const [filteredFotos, setFilteredFotos] = useState(fotos.filter((foto: any) => foto.relativePath.includes(filter)))
  console.log('firtFilteredFotos', filteredFotos);
  console.log(fotos.filter((foto: any) => foto.relativePath.includes(filter)));
  
  
  useEffect(() => {
    setFilteredFotos(fotos.filter((foto: any) => foto.relativePath.includes(filter)))
  }, [filter])

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
    const actual = filteredFotos.filter(
      (foto: any) => foto.childrenImageSharp[0].fluid.base64 === img.base64
    )[0]
    const next = filteredFotos[filteredFotos.indexOf(actual) + 1]
    console.log(filteredFotos.indexOf(actual))
    console.log(filteredFotos.indexOf(next))

    if (filteredFotos.indexOf(next) >= 0) {
      setImg(next.childrenImageSharp[0].fluid)
    }
  }

  function handlePrevImage() {
    const actual = filteredFotos.filter(
      (foto: any) => foto.childrenImageSharp[0].fluid.base64 === img.base64
    )[0]
    const prev = filteredFotos[filteredFotos.indexOf(actual) - 1]
    console.log(filteredFotos.indexOf(actual))
    console.log(filteredFotos.indexOf(prev))

    if (filteredFotos.indexOf(prev) >= 0) {
      setImg(prev.childrenImageSharp[0].fluid)
    }
  }

  function handleFilter (event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault()
    console.log((event.target as HTMLButtonElement).name)
    setFilter((event.target as HTMLButtonElement).name)
    console.log('filteredFotos---->', filteredFotos)
  }


  return (
    <Layout>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle}>
          <div
            style={{
              backgroundColor: '#F0C808',
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
              backgroundColor: '#F0C808',
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
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        GALERIA DE FOTOS
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: '80%',
          gap: '10px',
          margin: 'auto',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        {directories.map((directory: any, index: number) => (
          <Button
            name={directory.name}
            key={index}
            style={{
              backgroundColor: filter===directory.name ? 'rgb(191, 161, 18)' : 'rgb(240, 200, 8)',
              padding: '0 12px',
              borderRadius: '10px',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              color: 'black',
              fontSize: '12px'
            }}
            onClick={(event) => handleFilter(event)}
          >
            {directory.name.replace(/-/g, ' ')}
          </Button>
        ))}
      </div>
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
          // height: 'calc(100% - 70px)',
          margin: 'auto',
          marginBottom: '20px',
          borderRadius: '10px',
          padding: '15px',
          overflow: 'scroll',
          boxSizing: 'border-box',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        {filteredFotos.map((foto, index) => (
          <div
            key={index}
            style={{ width: '45%', cursor: 'pointer' }}
            onClick={() => handleOpenModal(foto.childrenImageSharp[0].fluid)}
          >
            <Img
              fluid={foto.childrenImageSharp[0].fluid}
              imgStyle={{ borderRadius: '20px', maxHeight: '200px' }}
            />
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
    allDirectory(
      filter: {
        absolutePath: { regex: "/galeria-de-fotos/" }
        name: { ne: "galeria-de-fotos" }
      }
    ) {
      nodes {
        name
      }
    }
  }
`
