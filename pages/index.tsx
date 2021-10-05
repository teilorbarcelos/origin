import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import ArrowUp from '../components/icons/ArrowUp'
import styles from './styles.module.css'

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

      <Footer />

      <Link href={'#home'}>
        <a className={styles.arrowUp}><i><ArrowUp color="white" /></i></a>
      </Link>
    </div>
  )
}

export default Home