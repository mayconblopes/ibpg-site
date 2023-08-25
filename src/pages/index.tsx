import * as React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Evento from '../components/Evento'
import MyCarousel from '../components/MyCarousel'
import QuadroAvisos from '../components/QuadroAvisos'
import IBPGNews from '../components/IBPGNews'
import CultosOnline from '../components/CultosOnline'

export default function Home() {
  const eventos = [
    {
      title: 'Ele vira!',
      date: '21/05/2022',
      cover:
        'https://images.pexels.com/photos/15489187/pexels-photo-15489187/free-photo-of-lone-tree-on-the-hill-in-fog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      title: 'Ele já veio!',
      date: '21/05/2023',
      cover:
        'https://images.pexels.com/photos/10283517/pexels-photo-10283517.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      title: 'Ele retorna!',
      date: '21/05/2022',
      cover:
        'https://images.pexels.com/photos/15478810/pexels-photo-15478810/free-photo-of-sea-black-and-white-landscape-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },

    {
      title: 'Ele retorna!',
      date: '21/05/2022',
      cover:
        'https://images.pexels.com/photos/15478810/pexels-photo-15478810/free-photo-of-sea-black-and-white-landscape-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },

    {
      title: 'Ele retorna!',
      date: '21/05/2022',
      cover:
        'https://images.pexels.com/photos/15478810/pexels-photo-15478810/free-photo-of-sea-black-and-white-landscape-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
  ]

  return (
    <Layout>
      <Banner />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '85%' }}>
          <MyCarousel
            items={eventos.map((evento, i) => (
              <Evento key={i} {...evento} />
            ))}
          />
        </div>
        <div style={{ marginTop: '20px', width: '85%' }}>
          <QuadroAvisos
            avisos={[
              'Curso de panificação com o Diácono Paulo Roberto: inscrição R$ 20,00 (na secretaria). Vagas limitadas!',
              'Curso de panificação com o Diácono Paulo Roberto: inscrição R$ 20,00 (na secretaria). Vagas limitadas!',
              'Curso de panificação com o Diácono Paulo Roberto: inscrição R$ 20,00 (na secretaria). Vagas limitadas!',
            ]}
          />
        </div>

        <div style={{ marginTop: '20px', width: '85%' }}>
          <IBPGNews videoURL='https://www.youtube.com/embed/EtWsrp4dnhE?si=uTkTJHVGyi-Uopu1' />
        </div>

        <div style={{ marginTop: '20px', width: '85%' }}>
          <CultosOnline
            cultosURLs={[
              'https://www.youtube.com/embed/EtWsrp4dnhE?si=uTkTJHVGyi-Uopu1',
              'https://www.youtube.com/embed/EtWsrp4dnhE?si=uTkTJHVGyi-Uopu1',
              'https://www.youtube.com/embed/EtWsrp4dnhE?si=uTkTJHVGyi-Uopu1',
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}
