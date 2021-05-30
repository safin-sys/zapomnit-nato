import style from "../styles/Quiz.module.scss"

export const Quiz = () => {
    const mcqs = {
        que: "A for _.",
        des: "Fill in the gap",
        ans: "Alpha",
        options: [
            "Aqua",
            "Alpha",
            "America",
            "Anal"
        ]
    }
    return (
        <main className={style.quiz}>
            <div className={style.score}>
                <h1>0</h1>
                <p>Your score</p>
            </div>
            <hr />
            <div className={style.mcq}>
                <div className={style.que}>
                    <h1>A for _.</h1>
                    <p>Fill in the gap</p>
                </div>
                <div className={style.options}>
                    {mcqs.options?.map((opt, key) => {
                        return <Option key={key} i={key} opt={opt} />
                    })}
                    <button>
                        Next
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
                    </button>
                </div>
            </div>
        </main>
    )
}

const Option = ({ i, opt }) => {
    console.log(i);
    const handleKey = () => {
        if (i === 0) return 'A'
        if (i === 1) return 'B'
        if (i === 2) return 'C'
        if (i === 3) return 'D'
    }
    return (
        <h2>{handleKey()}. {opt}</h2>
    )
}









