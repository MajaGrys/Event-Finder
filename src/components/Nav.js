import menu from '../img/menu.svg';

export default function Nav() {
    const mobileNavToogle = () => document.querySelector('body').classList.toggle('mobile-nav-active');

    return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        <h1>EventFinder</h1>
      </a>

      <nav id="navmenu" className="navmenu" onClick={mobileNavToogle}>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#search">Search for events</a></li>
          {/* <li><a href="#">New</a></li>
          <li><a href="#">Trending</a></li> */}
          <li><a href="https://github.com/MajaGrys" target="_blank">GitHub</a></li>
        </ul>

      </nav>
      <a className="btn-getstarted mobile-nav-toggle" id="menu" onClick={mobileNavToogle}><img src={menu} /></a>
      </div>
      </header>
    )
}