import './styles/main.scss';
import './styles/appendStyles.css';
import Nav from './components/Nav';
import Home from './components/Home';
import EventFinder from './components/EventFinder';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
    return (
        <div className="index-page">
            <Nav />
            <Home />
            <EventFinder />
            <Footer />
            <ScrollToTop />
        </div>
  );
}

export default App;
