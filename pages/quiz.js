import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Quiz } from "../components/Quiz";

export default function QuizPage() {
    return (
        <>
            <Head>
                <title>Quiz | Zapomnit' NATO</title>
            </Head>
            <Navbar />
            <Quiz />
            <Footer />
        </>
    )
}
