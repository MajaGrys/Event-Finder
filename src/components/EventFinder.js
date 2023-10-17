import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import FoundEvents from './FoundEvents';
import { RotatingLines } from 'react-loader-spinner';

export default function EventFinder({ city }) {
    const [eventInfo, changeEventInfo] = useState({
      city: city,
      datetime: '',
      keyword: '',
      sort: ''
    });
    const [searchEvent, setSearchEvent] = useState(eventInfo);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=200&city=${eventInfo.city}&startDateTime=${eventInfo.datetime}&keyword=${eventInfo.keyword}&sort=${eventInfo.sort}&apikey=`); // API key must be added, this is empty for security purposes 
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
    }, [eventInfo])

    //Home submit handler
    useEffect(() => { 
      changeEventInfo(eventInfo => {return {...eventInfo, city: city}})
    }, [city])

    //EventFinder submit handler
    const handleSubmit = (e) => { 
      e.preventDefault();
      changeEventInfo({city: searchEvent.city, datetime: searchEvent.datetime, sort: searchEvent.sort, keyword: searchEvent.keyword})
    }

    return (
      <section id="search" className="services">
        
      <div className="container section-title">
          <h2>Events</h2>
          <p>Specify the details below to search for events.</p>
      </div>
      
      <form className="events-search d-flex justify-content-center flex-wrap" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input type="text" id="keyword" className="form-control" onChange={e => setSearchEvent(info =>{return {...info, keyword: e.target.value}})}></input>
          <label htmlFor="keyword">Enter a keyword</label>
        </div>

        <div className="form-floating">
          <input type="text" id="city" className="form-control" onChange={e => setSearchEvent(info =>{return {...info, city: e.target.value}})}></input>
          <label htmlFor="city">Enter a city</label>
        </div>

        <div className="form-floating">
          <input type="datetime-local" id="date" className="form-control" onChange={e => setSearchEvent(info =>{return {...info, datetime: e.target.value+':00Z'}})}></input>
          <label htmlFor="date">Enter a date</label>
        </div>

        <div className="form-floating mb-3">
          <select className="form-control" id="sort" onChange={e => setSearchEvent (info => {return {...info, sort: e.target.value}})}>
            <option value='relevance,desc'>Relevance</option>
            <option value='date,asc'>Date (asc)</option>
            <option value='date,desc'>Date (desc)</option>
            <option value='name,asc'>Name (asc)</option>
            <option value='name,desc'>Name (desc)</option>
          </select>
          <label htmlFor="sort">Sort by</label>
        </div>

        <input type="submit" className="btn btn-primary mb-3" value="Search" />  
      </form>

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