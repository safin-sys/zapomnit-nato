import { useRef } from 'react'
import style from '../styles/Navbar.module.scss'
import Link from "next/link"

export const Navbar = () => {
    const input = useRef();
    const handleClick = () => {
        if(input.current.checked) {
            document.documentElement.dataset.theme = 'dark';
        } else {
            document.documentElement.dataset.theme = 'light';
        }
        trans();
    }
    const trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }
    return (
        <nav className={`${style.navbar} container`}>
            <Link href="/">Zapomnit' NATO</Link>
            <label className="switch">
                <input type="checkbox" ref={input} onClick={handleClick} />
                <span className="slider round"></span>
            </label>
        </nav>
    )
}
