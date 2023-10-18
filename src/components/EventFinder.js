import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import SearchOptions from './SearchOptions';
import FoundEvents from './FoundEvents';

export default function EventFinder() {
    const { keyword, city, datetime, sort } = useSelector(state => state.eventInfo);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    async function getData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=200&city=${city}&startDateTime=${datetime}&keyword=${keyword}&sort=${sort}&apikey=`); // API key must be added, this is empty for security purposes
        setData(response.data._embedded.events)
        setError(false);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }

    useEffect(() => {
        getData();
    }, [keyword, city, datetime, sort])

    return (
      <section id="search" className="services">
        
      <div className="container section-title">
          <h2>Events</h2>
          <p>Specify the details below to search for events.</p>
      </div>
      
      <SearchOptions />

      {isLoading
            ? <div className="container section-title"><RotatingLines
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            width="48"
            visible={true} /></div>
            : <FoundEvents error={error} data={data} />}

      </section>
    )
}