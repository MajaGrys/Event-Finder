import axios from 'axios';
import { useState, useEffect } from 'react';

export default function EventFinder(props) {
    const currentDate = new Date()
    const [eventInfo, changeEventInfo] = useState({
      city: props.city,
      datetime: `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,"0")}-${String(currentDate.getDate()).padStart(2, '0')}T${String(currentDate.getHours()).padStart(2,"0")}:${String(currentDate.getMinutes()).padStart(2,"0")}:00Z`,
      page: 0
    })
    const [searchEvent, setSearchEvent] = useState(eventInfo) //To avoid sending data to getData before submit
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function getData() {
      try {
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=5&page=${eventInfo.page}&city=${eventInfo.city}&startDateTime=${eventInfo.datetime}&apikey=`); // API key must be added, this is empty for security purposes
        setData(response.data._embedded.events)
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    useEffect(() => {
      getData();
    }, [eventInfo])

    useEffect(() => { //Handles Home submit
      changeEventInfo(eventInfo => {return {...eventInfo, city: props.city}})
    }, [props.city])

    const handleSubmit = (e) => { //Handles EventFinder submit
      e.preventDefault();
      changeEventInfo({city: searchEvent.city, datetime: searchEvent.datetime, page: searchEvent.page})
    }

    if (isLoading) { //Wait for default fetch before loading to avoid errors
        return (<div id="search" className="container section-title">Loading...</div>)
    } else {
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
      
            {data.map(e => {return (
              <div className="container col-lg-6" key={e.id}>
                  <div className="service-item d-flex">
                    <img src={e.images[0].url} className="icon" />
                  <div>
                    <h4 className="title">{e.name}</h4>
                    <p className="description">{e.dates.start.localDate} {e.dates.start.localTime}<br />
                    {e._embedded.venues[0].city.name}, {e._embedded.venues[0].address.line1} <a href={e._embedded.venues[0].url} target='_blank'>{e._embedded.venues[0].name}</a><br />
                    {e._embedded.attractions[0].classifications[0].segment.name} / {e._embedded.attractions[0].classifications[0].genre.name}</p>
                    <a href={e.url} target='_blank'>Buy tickets</a>
                  </div>
                  </div>
              </div>
            )})}
    
            </section>
        )}
}