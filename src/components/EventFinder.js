import axios from 'axios';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function EventFinder({ city }) {
    const [eventInfo, changeEventInfo] = useState({
      city: city,
      datetime: '',
      page: 0
    });
    const [searchEvent, setSearchEvent] = useState(eventInfo);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=5&page=${eventInfo.page}&city=${eventInfo.city}&startDateTime=${eventInfo.datetime}&apikey=`); // API key must be added, this is empty for security purposes 
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

    useEffect(() => { //Handles Home submit
      changeEventInfo(eventInfo => {return {...eventInfo, city: city}})
    }, [city])

    const handleSubmit = (e) => { //Handles EventFinder submit
      e.preventDefault();
      changeEventInfo({city: searchEvent.city, datetime: searchEvent.datetime, page: searchEvent.page})
    }

    return (
      <section id="search" className="services">
        
      <div className="container section-title">
          <h2>Events</h2>
          <p>Specify the details below to search for events.</p>
      </div>
      
      <form className="events-search d-flex justify-content-center flex-wrap" onSubmit={handleSubmit}>
        <div className="form-floating mb-3 col-md-2">
          <input type="text" className="form-control" onChange={e => setSearchEvent(info =>{return {...info, city: e.target.value}})}></input>
          <label htmlFor="city">Enter a city</label>
        </div>

        <div className="form-floating mb-3">
          <input type="datetime-local" className="form-control" onChange={e => setSearchEvent(info =>{return {...info, datetime: e.target.value+':00Z'}})}></input>
          <label htmlFor="date">Enter a date</label>
        </div>
        <input type="submit" className="btn btn-primary mb-3" value="Search" />  
      </form>

      { isLoading
        ? <div className="container section-title"><RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true} /></div>
        : ( error
            ? <div className="alert alert-danger mx-auto col-lg-6" role="alert">
            No events have been found.
            </div>
            : data.map(e => {return (
              <div className="container col-lg-6" key={e.id}>
                  <div className="service-item d-flex">
                    <img src={e.images[0].url} className="icon" />
                  <div>
                    <h4 className="title">{e.name}</h4>
                    <p className="description">{e.dates.start.localDate} {e.dates.start.localTime} <br />
                    {e.hasOwnProperty('_embedded') && <><a href={e._embedded.venues[0].url} target='_blank'>{e._embedded.venues[0].name}</a> {e._embedded.venues[0].address.line1}, {e._embedded.venues[0].city.name}, {e._embedded.venues[0].country.name} <br /></>}
                    {e.hasOwnProperty('place') && <>{e.place.address.line1}</>}
                    {e.hasOwnProperty('classifications') && <>{e.classifications[0].segment.name} / {e.classifications[0].genre.name}</>}
                    </p>
                    <a href={e.url} target='_blank'>Buy tickets</a>
                  </div>
                  </div>
              </div>
              )}))
        }

      </section>
    )
}