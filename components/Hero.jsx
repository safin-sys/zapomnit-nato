import style from '../styles/Hero.module.scss'
import Marquee from 'react-fast-marquee'
import { useRef } from 'react'
import 'animate.css'

export const Hero = ({ nato }) => {
    const btnP = useRef();
    const handleHover = () => {
        btnP.current.classList.add('animate__rubberBand')
        setTimeout(() => {
            btnP.current.classList.remove('animate__rubberBand')
        }, 500)
    }
    return (
        <>
            <div className={style.hero}>
                <h1>Start Learning Nato Phoenitic Alphabets Right Now.</h1>
                <button onMouseEnter={handleHover}><p ref={btnP} className="animate__animated ">Click Here To Start Learning Now</p></button>
            </div>
            <div className={style.marq}>
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
