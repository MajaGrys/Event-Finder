import './styles/main.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Events from './components/Events';
import Map from './components/Map';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
        <Nav />
        <Home />
        <Events />
        <Map />
        <About />
        <ScrollToTop />
        </>
  );
}

export default App;
