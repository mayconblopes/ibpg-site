import React, { useContext, useEffect } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import Layout from '../../components/Layout'
import PostDetail from './postdetail'
import BlogIndex from '../../components/Blog/index'
import { PantryContextProvider, PantryContext } from '../../context/PantryContext'



export default function BlogPage() {


  
  return (
    <Layout>
      <PantryContextProvider>
      <Router basepath='/blog'>
        <BlogIndex path='/' />
        <PostDetail path='/:slug' />
      </Router>
      </PantryContextProvider>
    </Layout>
  )
}
