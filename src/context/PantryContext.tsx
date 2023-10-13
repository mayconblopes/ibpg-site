import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

const apiURL = process.env.GATSBY_API_URL

export type EventoType = {
  eventTitle: string,
  eventDate: string,
  eventHTML: string,
  eventCover: string,
}

export type PantryContextType = {
  avisosFromPantry: string[]
  eventosFromPantry: EventoType[]
}

export const PantryContext = createContext({} as PantryContextType)

export function PantryContextProvider({ children }: any) {
  const [avisosFromPantry, setAvisosFromPantry] = useState<Array<string>>([])
  const [eventosFromPantry, setEventosFromPantry] = useState<Array<EventoType>>([])

  useEffect(() => {
      fetch(`${apiURL}/basket/ibpg_basket`)
        .then(response => response.json())
        .then(result => {
          setAvisosFromPantry(result.avisos)
          setEventosFromPantry(result.eventos)
        })
        .catch(error => {
          console.log(error)
        })
  }, [])
  
  return (
    <PantryContext.Provider value={{ avisosFromPantry, eventosFromPantry }}>
      {children}
    </PantryContext.Provider>
  )
}
