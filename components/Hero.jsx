import style from '../styles/Hero.module.scss'
import 'animate.css'
import { useRef } from 'react'

export const Hero = () => {
    const btnP = useRef();
    const handleHover = () => {
        btnP.current.classList.add('animate__rubberBand')
        setTimeout(() => {
            btnP.current.classList.remove('animate__rubberBand')
        }, 500)
    }
    return (
        <div className={style.hero}>
            <h1>Start Learning Nato Phoenitic Alphabets Right Now.</h1>
            <button onMouseEnter={handleHover}><p ref={btnP} className="animate__animated ">Click Here To Start Learning Now</p></button>
        </div>
    )
}
