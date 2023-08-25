import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Evento, { EventoProps } from './Evento'
import { Home } from '@mui/icons-material'
import { fontSize, height } from '@mui/system'
import SquareIcon from '@mui/icons-material/Square'

export default function MyCarousel({ items }: any) {
  {
    return (
      <Carousel
        IndicatorIcon={<SquareIcon sx={{fontSize: '10px'}}/>}

        indicatorIconButtonProps={{
          style: {
            opacity: 0.5,
            padding: '5px'
          },
        }}

        activeIndicatorIconButtonProps={{
          style: {
            opacity: 1,
          },
        }}
      >
        {items}

        {/* // [
          //     <Evento title='Ele vira!' date='21/05/2022' cover='https://i.stack.imgur.com/sDDjX.jpg?s=64&g=1' />,
          //     <Evento title='Ele já veio!' date='21/05/2023' cover='https://images.pexels.com/photos/10283517/pexels-photo-10283517.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />,
          //     <Evento title='Ele retorna!' date='21/05/2022' cover='https://i.stack.imgur.com/sDDjX.jpg?s=64&g=1' />,
          // ] */}
      </Carousel>
    )
  }
}
