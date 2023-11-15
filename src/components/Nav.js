import { useRef } from'react';
import '../styles/Nav.scss';
import menu from '../img/menu.svg';

export default function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('nav-active');
  }

  const navItems = [
    {url: '#home', text: 'Home'},
    {url: '#search', text: 'Search for events'},
    {url: '#availability', text: 'Availability'},
    {url: '#about', text: 'About'}
  ]

  return (
    <header className="fixed-top shadow">
      <a href="#home" className="logo event-finder">EventFinder</a>

      <nav ref={navRef}>
        {navItems.map(item => {
          return <a href={item.url} onClick={showNavbar} key={item.url}>{item.text}</a>
        })}
        <a href="https://github.com/MajaGrys/Event-Finder" target="_blank" rel="noreferrer">GitHub</a>
      </nav>

      <button className="mobile-nav-btn" onClick={showNavbar}><img src={menu} alt='' /></button>
    </header>
  )
}