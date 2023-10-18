import './styles/main.scss';
import './styles/appendStyles.css';
import Nav from './components/Nav';
import Home from './components/Home';
import EventFinder from './components/EventFinder';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="index-page">
            <Nav />
            <Home />
            <EventFinder />
            <ScrollToTop />
        </div>
  );
}

export default App;
