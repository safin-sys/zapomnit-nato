import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import Marquee from 'react-fast-marquee'

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
        <>
            <Head>
                <title>Zapomnit' NATO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Hero />
            <div className="marq">
                <Marquee gradient={false} speed={50}>
                    {nato.map((alph, i) => {
                        return <span key={i}>{alph}</span>
                    })}
                </Marquee>
                <Marquee gradient={false} direction="right" speed={50}>
                    {nato.map((alph, i) => {
                        return <span key={i}>{alph}</span>
                    })}
                </Marquee>
                <Marquee gradient={false} speed={50}>
                    {nato.map((alph, i) => {
                        return <span key={i}>{alph}</span>
                    })}
                </Marquee>
            </div>
        </>
    )
}