import React, { useContext, useEffect, useState } from 'react'
import { Router, RouteComponentProps, Link } from '@reach/router'
import { PantryContext, PostType } from '../../context/PantryContext'
import slugfy from '../../utils/slugfy'
import showdown from 'showdown'
import makeHtml from '../../utils/makeHtml'
import * as styles from './postdetail.module.css'

interface PostProps extends RouteComponentProps {
  slug?: string
}

export default function PostDetail(props: PostProps) {
  const { postsFromPantry } = useContext(PantryContext)
  const [postToShow, setPostToShow] = useState<PostType | undefined>(undefined)
  const markdownConverter = new showdown.Converter()

  useEffect(() => {
    console.log(postsFromPantry)
    setPostToShow(
      postsFromPantry.filter(post => slugfy(post.title) === props.slug)[0]
      
      )
      console.log(makeHtml(postToShow?.content || ''))
  }, [postsFromPantry])

  return (
    <>
      {postToShow && (
        <>
          <h1 className={styles.postTitle}>{postToShow.title.toLocaleUpperCase()}</h1>
          <div
            className={'beautifulText' + ' ' + styles.postContent}
            dangerouslySetInnerHTML={{ __html: makeHtml(postToShow.content) }}
          />
          <div className={styles.back}>

          <Link  to='/blog'>voltar</Link>
          </div>
        </>
      )}
    </>
  )
}
