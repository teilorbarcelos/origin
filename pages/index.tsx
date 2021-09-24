import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OriginTen</title>
      </Head>

      <Header />

      <Main />
    </div>
  )
}

export default Home