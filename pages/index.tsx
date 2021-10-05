import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'

const Home: NextPage = () => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OriginTen</title>
      </Head>

      <Header />

      {render && <Main />}
    </div>
  )
}

export default Home