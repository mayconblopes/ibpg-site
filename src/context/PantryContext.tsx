import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

// const apiURL = process.env.GATSBY_API_URL
const apiURL = process.env.GATSBY_EXTENDSCLASS_API_URL

export type EventoType = {
  eventTitle: string
  eventDate: string
  eventHTML: string
  eventCover: string
}

export type PostType = {
  title: string,
  content: string,
  pubDate: string,
  author: string
}

export type PantryContextType = {
  avisosFromPantry: string[]
  eventosFromPantry: EventoType[]
  postsFromPantry: PostType[]
}

export const PantryContext = createContext({} as PantryContextType)

export function PantryContextProvider({ children }: any) {
  const [avisosFromPantry, setAvisosFromPantry] = useState<Array<string>>([])
  const [eventosFromPantry, setEventosFromPantry] = useState<Array<EventoType>>([])
  const [postsFromPantry, setPostsFromPantry] = useState<Array<PostType>>([])

  useEffect(() => {
    // fetch(`${apiURL}/basket/ibpg_basket`)
    fetch(`${apiURL}`, {
      method: 'GET',
      headers: {
        'Security-key': `${process.env.GATSBY_EXTENDSCLASS_SECURITY_KEY}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        setAvisosFromPantry(result.avisos)
        setEventosFromPantry(result.eventos)
        setPostsFromPantry(result.posts)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <PantryContext.Provider value={{ avisosFromPantry, eventosFromPantry, postsFromPantry }}>
      {children}
    </PantryContext.Provider>
  )
}
