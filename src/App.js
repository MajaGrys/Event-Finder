import { useEffect, useState } from 'react';
import './styles/main.scss';
import './styles/appendStyles.css';
import Nav from './components/Nav';
import EventFinder from './components/EventFinder';
import concert from './img/concert.jpg';


function App() {
    const [city, setCity] = useState('');
    const [cityChange, handleCityChange] = useState(''); //To avoid sending data to EventFinder before submit

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(cityChange);
        window.location.href='#search';
    }

    return (
      <div className="index-page">
        <Nav />
        <section id="home" className="hero">

        <img src={concert} alt="people on a concert" />

        <div className="container">
            <div className="row">
            <div className="col-lg-10">
                <h2>Welcome to Event Finder</h2>
                <p>Search for events nearby you</p>
            </div>
            <div className="col-lg-5" onSubmit={handleSubmit}>
                <form action="#search" className="sign-up-form d-flex">
                <input type="text" className="form-control" placeholder="Enter a city" onChange={(e) => handleCityChange(e.target.value)} />
                <input type="submit" className="btn btn-primary" value="Search" />
                </form>
            </div>
            </div>
        </div>
        </section>

        <EventFinder city={city} />         
        </div>
  );
}

export default App;
