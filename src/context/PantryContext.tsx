import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

const apiURL = process.env.GATSBY_API_URL
console.log('APIURL-->',apiURL);


export type PantryContextType = {
  avisosFromPantry: string[]
  eventosFromPantry: string[]
}

export const PantryContext = createContext({} as PantryContextType)

export function PantryContextProvider({ children }: any) {
  const [avisosFromPantry, setAvisosFromPantry] = useState<Array<string>>([])
  const [eventosFromPantry, setEventosFromPantry] = useState<Array<string>>([])
  const usePantry = true

  useEffect(() => {
    fetch(`${apiURL}/basket/ibpg_basket`)
      .then(response => response.json())
      .then(result => {
        console.log('RESULT BASKET--->', result)
        setAvisosFromPantry(result.avisos)
        setEventosFromPantry(result.eventos)
        console.log('AVISOS FROM PANTRY', avisosFromPantry)
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
