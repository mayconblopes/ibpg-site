import React from 'react'
import Navbar from './Navbar'
import '../globals.css'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Navbar />

      <div style={{ minHeight: `calc(${window.innerHeight}px - 155px)` }}>
        {children}
      </div>

      <footer
        style={{
          height: '80px',
          background: '#0299D4',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ width: '67%', color: 'white', fontSize:'12px', fontWeight: 'bold' }}>
          Igreja Batista em Parque Guarus 
        </p>
        <p style={{ width: '67%', color: 'white', fontSize:'12px' }}>
          Av. Cristovan Lysandro Albernaz, 245 - Pq Guarus, Campos/RJ
        </p>
      </footer>
    </div>
  )
}
