import { useRef, useState } from "react"
import style from "../styles/Quiz.module.scss"

export const Quiz = ({ mcqs }) => {
    const [score, setScore] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(0)
    return (
        <main className={style.quiz}>
            <div className={style.score}>
                <h1>{score}/{questionNumber}</h1>
                <p>Your score</p>
            </div>
            <hr />
            <div className={style.mcq}>
                <Question mcqs={mcqs} setScore={setScore} setQuestionNumber={setQuestionNumber} />
            </div>
        </main>
    )
}

const Question = ({ mcqs, setScore, setQuestionNumber }) => {
    const [selected, setSelected] = useState()
    const [mcq, setMCQ] = useState(mcqs[Math.floor(Math.random() * mcqs.length)])
    
    const handleAnswer = () => {
        const options = document.querySelector('.'+ style.options).childNodes
        if(selected && selected[0] === mcq?.ans[0]) {
            if(selected === mcq.ans) {
                setQuestionNumber(n => n + 1)
                setScore(n => n + 1)
                setMCQ(mcqs[Math.floor(Math.random() * mcqs.length)])
                options.forEach(node => {
                    node.classList.remove(style.selected)
                })
            } else {
                setQuestionNumber(n => n + 1)
            }
        } else {
            alert('Select an answer');
        }
    }
    return (
        <>
            <div className={style.que}>
                <h1>{mcq.ans[0]} for _.</h1>
                <p>Fill in the gap</p>
            </div>
            <div className={style.options}>
                {mcq.options?.map((opt, key) => {
                    return <Option key={key} i={key} opt={opt} setSelected={setSelected} />
                })}
                <button onClick={handleAnswer}>
                    Next
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
                </button>
            </div>
        </>
    )
}

const Option = ({ i, opt, setSelected }) => {
    const handleKey = () => {
        if (i === 0) return 'A'
        if (i === 1) return 'B'
        if (i === 2) return 'C'
        if (i === 3) return 'D'
    }
    const optionRef = useRef()
    const handleClick = () => {
        optionRef.current.parentNode.childNodes.forEach(node => {
            node.classList.remove(style.selected)
        })
        optionRef.current.classList.add(style.selected)
        setSelected(opt)
    }
    return (
        <h2 ref={optionRef} onClick={handleClick}>{handleKey()}. {opt}</h2>
    )
}









