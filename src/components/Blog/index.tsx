import React, { useContext, useEffect, useState } from 'react'
import { PantryContext } from '../../context/PantryContext'
import { Link, RouteComponentProps } from '@reach/router'
import * as styles from './blogIndex.module.css'
import Banner from '../Banner'
import slugfy from '../../utils/slugfy'

export default function BlogIndex(props: RouteComponentProps) {
  const context = useContext(PantryContext)

  const [readMode, setReadMode] = useState(false)

  return (
    <>
      {!readMode && (
        <img
          src='/banner_ibpg_blog.webp'
          alt='ibpg blog'
          style={{ width: '100%' }}
        />
      )}
      {/* <h1 style={{ textAlign: 'center' }}>ÚLTIMOS POSTS</h1> */}
      <section className={styles.blogListContainer}>
        {context.postsFromPantry.map((post: any) => {
          let slug = slugfy(post.title)
          // let slug = post.title
          //   .split(' ')
          //   .join('-')
          //   .toLowerCase()
          //   .replace(/[*+~.()'"!:@]/g, '')

          return (
            <div key={slug} className={styles.card}>
              <Link to={`/blog/${slug}`}>
                <h2>{post.title}</h2>
                <h3>Autor: {post.author}</h3>
                <h3>Data: {post.pubDate}</h3>
              </Link>
            </div>
          )
        })}
      </section>
    </>
  )
}
