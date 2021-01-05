import Link from 'next/link'
import Layout from '../components/Layout'
import React, { useContext } from 'react'
import { AuthContext } from '../components/Auth'

const IndexPage = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
