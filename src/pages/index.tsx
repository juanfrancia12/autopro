import HomeView from '@modules/Home/components/HomeView'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>AUTOPRO</title>
      </Head>
      <HomeView />
    </>
  )
}

export default HomePage
