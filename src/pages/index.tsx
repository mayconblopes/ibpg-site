import * as React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Evento from "../components/Evento"

export default function Home() {
  return (
    <Layout>
      <Banner/>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Evento/>
      </div>
    </Layout>
  )
}
