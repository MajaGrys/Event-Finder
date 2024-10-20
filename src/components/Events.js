import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import SearchOptions from './SearchOptions';
import FoundEvents from './FoundEvents';
import CurrentSearch from './CurrentSearch';
import '../styles/EventFinder.scss';

export default function EventFinder() {
    const { keyword, city, datetime, category, sort } = useSelector(state => state.eventInfo);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        setLoading(true);
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=200&city=${city}&startDateTime=${datetime}&keyword=${keyword}&classificationName=${category}&sort=${sort}&apikey=${apiKey}`) // API key must be added, this is empty for security purposes
        .then(res => {
          setData(res.data._embedded.events);
          setError(false);
          setLoading(false);
        })
        .catch(err => {
          setError(true);
          setLoading(false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword, city, datetime, category, sort])

    return (
      <section id="search">
        
      <div className="container section-title">
          <h2>Events</h2>
          <p>Specify the details below to search for events.</p>
      </div>
      
      <SearchOptions />
      <CurrentSearch />

      {isLoading
            ? <div className="container loading"><RotatingLines
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            width="48"
            visible={true} /></div>
            : <FoundEvents error={error} data={data} />}

      </section>
    )
}