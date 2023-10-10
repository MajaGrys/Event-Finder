import { useState, useEffect } from "react";
import arrowUp from '../img/arrow_up.svg';

export default function ScrollToTop() {
    const [scrollButton, toggleScrollButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? toggleScrollButton(true) : toggleScrollButton(false)
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top: 0})
    }

    return (
        <>
        {scrollButton && (
        <button className="scroll-top" onClick={scrollToTop}><img src={arrowUp} /></button>
        )}
        </>
        
    )
}