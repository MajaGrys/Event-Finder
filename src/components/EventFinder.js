import axios from 'axios';
import { useState, useEffect } from 'react';

export default function EventFinder(props) {
    const currentDate = new Date()
    const [searchParams, setSearchParams] = useState({
      city: props.city,
      datetime: `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,"0")}-${String(currentDate.getDate()).padStart(2, '0')}T${String(currentDate.getHours()).padStart(2,"0")}:${String(currentDate.getMinutes()).padStart(2,"0")}:00Z`
    })
    const [searchParamsChange, setSearchParamsChange] = useState({}) //To avoid sending data to getData before submit
    const [data, setData] = useState('');
    const [isLoading, setLoading] = useState(true);

    async function getData() {
      try {
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=5&city=${searchParams.city}&startDateTime=${searchParams.datetime}&apikey=`); // API key must be added, this is empty for security purposes
        setData(response.data._embedded.events);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    useEffect(() => {
      getData()
    }, [searchParams.city, searchParams.datetime])

    useEffect(() => { //Handles Home submit
      setSearchParams(params => {return {...params, city: props.city}})
    }, [props.city])

    const handleSubmit = (e) => { //Handles EventFinder submit
      e.preventDefault();
      if (searchParamsChange.city != undefined) {
        setSearchParams(params => {return {...params, city: searchParamsChange.city}})}
      if (searchParamsChange.datetime != undefined) {
        setSearchParams(params => {return {...params, datetime: searchParamsChange.datetime}})}
    }

    if (isLoading) { //Wait for default fetch before loading to avoid errors
        return (<div id="search" className="container section-title">Loading...</div>)
    } else {
        return (
            <section id="search" className="services">
            <div className="container section-title" data-aos="fade-up">
                <h2>Events</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            
            <form className="events-search d-flex justify-content-center flex-wrap" onSubmit={handleSubmit}>
              <div className="form-floating mb-3 col-md-2">
                <input type="text" className="form-control" onChange={e => setSearchParamsChange({city: e.target.value})}></input>
                <label for="city">Enter a city</label>
              </div>

              <div className="form-floating mb-3">
                <input type="datetime-local" className="form-control" onChange={e => setSearchParamsChange({datetime: e.target.value+':00Z'})}></input>
                <label>Enter a date</label>
              </div>
              <input type="submit" className="btn btn-primary mb-3" value="Search" />    
            </form>
      
            {data.map(e => {return (
              <div className="container col-lg-6" key={e.id}>
                  <div className="service-item d-flex">
                    <img src={e.images[0].url} className="icon flex-shrink-0" />
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