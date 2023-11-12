import './styles/main.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import EventFinder from './components/EventFinder';
import Map from './components/Map';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
        <Nav />
        <Home />
        <EventFinder />
        <Map />
        <Footer />
        <ScrollToTop />
        </>
  );
}

export default App;
