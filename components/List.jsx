import { useState, useRef } from 'react'
import style from '../styles/Hero.module.scss'

export const List = ({ nato }) => {
    return (
        <div className={style.means}>
            <div>
                <h2>BTW "Zappomnit'" Means <br /> "Memorize" In Russian.</h2>
                <p>So start memorizing these</p>
            </div>
            <div className={style.list}>
                {nato.map((alph, i) => {
                    return <ListItem key={i} alph={alph} />
                })}
            </div>
        </div>
    )
}

const ListItem = ({ alph }) => {
    const [audio] = useState(typeof Audio !== "undefined" && new Audio(`audio/${alph[0]}.mp3`));
    const btnP = useRef()
    const handleClick = () => {
        const anim = () => {
            btnP.current.classList.add('animate__jello')
            setTimeout(() => {
                btnP.current.classList.remove('animate__jello')
            }, 500)
        }
        anim()

        const playAudio = () => {
            audio.play()
        }
        playAudio()
    }

    const handleAlph = () => {
        return `${alph[0]} - ${alph}`
    }
    return (
        <div>
            <h2>{handleAlph()}</h2>
            <button ref={btnP} onClick={handleClick} className="animate__animated ">LISTEN</button>
        </div>
    )
}