import { useRef } from'react';
import '../styles/Nav.scss';
import menu from '../img/menu.svg';

export default function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('nav-active');
  }

  return (
    <header className="fixed-top shadow">
      <a href="#home" className="logo event-finder">EventFinder</a>

      <nav ref={navRef}>
        <a href="#home">Home</a>
        <a href="#search">Search for events</a>
        <a href="#availability">Availability</a>
        <a href="#about">About</a>
        <a href="https://github.com/MajaGrys/Event-Finder" target="_blank" rel="noreferrer">GitHub</a>
      </nav>

      <button className="mobile-nav-btn" onClick={showNavbar}><img src={menu} alt='' /></button>
    </header>
  )
}