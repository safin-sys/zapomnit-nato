import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { List } from '../components/List'
import { Navbar } from '../components/Navbar'

export const getStaticProps = async () => {
    const data = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whisky', 'X-ray', 'Yankee', 'Zulu']

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
            <Hero nato={nato} />
            <List nato={nato} />
            <Footer />
        </>
    )
}