import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCity } from '../redux/eventInfo';
import '../styles/Home.scss';
import concert from '../img/concert.jpg';

export default function Home() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(changeCity(input));
      window.location.href='#search';
      setInput('')
      e.target.reset()
    }
    
    return (
        <section id="home">
            <img src={concert} alt="people on a concert" />
            
            <div className="d-flex flex-column justify-content-center">
                <h2>Welcome to <span className='event-finder'>Event Finder</span></h2>
                <p>Search for events nearby you</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control p-3" placeholder="Enter a city" onChange={e => setInput(e.target.value)} />
                    <input type="submit" className="btn" value="Search" />
                </form>
            </div>
        </section>
    )
}