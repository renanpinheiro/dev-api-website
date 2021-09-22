import React from 'react'

import Head from 'next/head'
import Hero from 'components/Hero'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
