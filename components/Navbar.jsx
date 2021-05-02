import { useRef } from 'react'
import style from '../styles/Navbar.module.scss'

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
        <nav className={style.navbar}>
            <h1>Zapomnit' NATO</h1>
            <label className="switch">
                <input type="checkbox" ref={input} onClick={handleClick} />
                <span className="slider round"></span>
            </label>
        </nav>
    )
}
