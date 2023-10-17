import { useState } from 'react';
import './styles/main.scss';
import './styles/appendStyles.css';
import Nav from './components/Nav';
import EventFinder from './components/EventFinder';
import concert from './img/concert.jpg';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
    const [city, setCity] = useState('');
    const [citySubmit, handleCitySubmit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(citySubmit);
        window.location.href='#search';
    }

    return (
        <div className="index-page">
        <Nav />
        <section className="hero" id="home">
            <img src={concert} alt="people on a concert" />

            <div className="container">
                <div className="row">
                <div className="col-lg-10">
                    <h2>Welcome to Event Finder</h2>
                    <p>Search for events nearby you</p>
                </div>
                <div className="col-lg-5" onSubmit={handleSubmit}>
                    <form className="sign-up-form d-flex">
                    <input type="text" name="city" className="form-control" placeholder="Enter a city" onChange={(e) => handleCitySubmit(e.target.value)} />
                    <input type="submit" className="btn btn-primary" value="Search" />
                    </form>
                </div>
                </div>
            </div>
        </section>
        <EventFinder city={city} />
        <Footer />
        <ScrollToTop />
        </div>
  );
}

export default App;
