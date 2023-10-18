import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCity } from '../redux/eventInfo';
import concert from '../img/concert.jpg';

export default function Home() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(changeCity(input));
      window.location.href='#search';
    }
    
    return (
        <section className="hero" id="home">
            <img src={concert} alt="people on a concert" />

            <div className="container">
                <div className="row">
                <div className="col-lg-10">
                    <h2>Welcome to Event Finder</h2>
                    <p>Search for events nearby you</p>
                </div>
                <div className="col-lg-5">
                    <form className="sign-up-form d-flex" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="Enter a city" onChange={e => setInput(e.target.value)} />
                    <input type="submit" className="btn btn-primary" value="Search" />
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}