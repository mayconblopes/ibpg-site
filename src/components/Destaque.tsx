import { Link } from 'gatsby'
import React from 'react'

type DestaqueProps = {
  title: string
  banner: string
  linkTo: string
}

export default function Destaque({ title, banner, linkTo }: DestaqueProps) {
  return (
    <div
      style={{
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Link to={linkTo}>
        <p
          style={{
            backgroundColor: 'rgba(240, 200, 8, 1)',
            color: 'black',
            padding: '6px',
          }}
        >
          {title}
        </p>
        <div
          style={{
            backgroundImage: `url(/${banner})`,
            height: '200px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
      </Link>
    </div>
  )
}
