import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Quiz } from "../components/Quiz";

export const getStaticProps = async () => {
    const req = await fetch('https://raw.githubusercontent.com/safin-sys/zapomnit-nato/main/public/mcqs.json')
    const mcqs = await req.json()

    return {
        props: {
            mcqs
        }
    }
}

export default function QuizPage({ mcqs }) {
    return (
        <>
            <Head>
                <title>Quiz | Zapomnit' NATO</title>
            </Head>
            <Navbar />
            <Quiz mcqs={mcqs} />
            <Footer />
        </>
    )
}
