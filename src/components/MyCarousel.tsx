import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
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

        
      </Carousel>
    )
  }
}
