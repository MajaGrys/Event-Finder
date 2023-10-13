import { useState } from 'react';
import Pagination from './Pagination';

export default function FoundEvents({error, data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 5;
    const lastEvent = currentPage * eventsPerPage;
    const firstEvent = lastEvent - eventsPerPage;
    const currentEvents = data.slice(firstEvent, lastEvent);
    const numberOfPages = Math.ceil(data.length / eventsPerPage);

    return (
        <>{error
            ? <div className="alert alert-danger mx-auto col-lg-6" role="alert">
            No events have been found.
            </div>
            : <>{currentEvents.map(e => {return (
              <div className="container col-lg-6" key={e.id}>
                  <div className="service-item d-flex m-4">
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
              )})}
              <Pagination data={data} currentPage={currentPage} numberOfPages={numberOfPages} setCurrentPage={setCurrentPage} /></>
            }</>
    )
}