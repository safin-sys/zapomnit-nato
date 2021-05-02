import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/nato')
  const data = await res.json()

  return {
    props: {
      nato: data
    }
  }
}

export default function Home({ nato }) {
  return (
    <div className="container">
      <Head>
        <title>Zapomnit' NATO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}