import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from './Pagination';
import { changeCategory } from '../redux/eventInfo';

export default function FoundEvents({error, data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 5;
    const lastEvent = currentPage * eventsPerPage;
    const firstEvent = lastEvent - eventsPerPage;
    const currentEvents = data.slice(firstEvent, lastEvent);
    const numberOfPages = Math.ceil(data.length / eventsPerPage);

    const dispatch = useDispatch();

    const handleClick = (e) => {
      dispatch(changeCategory(e.target.value));
    }

    return (
        <>
        {error
          ? <div className="alert alert-danger mx-auto col-8">
          No events have been found.
          </div>
          : <>{currentEvents.map(e => {return (
            <div className="event-item container col-lg-8" key={e.id}>
              <div className="card mb-4">
                <h3 className="card-header text-center fs-4">{e.name}</h3>

                <div className="card-body d-flex">
                  <img src={e.images[4].url} className="event-icon" alt='' />

                  <div className="description">
                    {e.hasOwnProperty('classifications') 
                    ? e.classifications[0].segment.name === 'Miscellaneous'
                      ? e.classifications[0].hasOwnProperty('genre')
                        ? <button className='category-badge badge' value={e.classifications[0].genre.name} onClick={handleClick}>{e.classifications[0].genre.name}</button>
                        : <button className='category-badge badge' value={e.classifications[0].segment.name} onClick={handleClick}>{e.classifications[0].segment.name}</button>
                      : e.classifications[0].segment.name === 'Undefined'
                      ? <button className='category-badge badge' value={e.classifications[0].subType.name} onClick={handleClick}>{e.classifications[0].subType.name}</button>
                      : <button className='category-badge badge' value={e.classifications[0].segment.name} onClick={handleClick}>{e.classifications[0].segment.name}</button>
                    : <></>}

                    {e.dates.start.localDate} {e.dates.start.localTime}<br />

                    {e.hasOwnProperty('_embedded') && <a href={e._embedded.venues[0].url} target='_blank' rel="noreferrer" className='venue'>{e._embedded.venues[0].name}</a>}

                    {e.hasOwnProperty('_embedded')
                    && e._embedded.venues[0].hasOwnProperty('address')
                    && <div>{e._embedded.venues[0].address.line1}, {e._embedded.venues[0].city.name}, {e._embedded.venues[0].country.name}</div>}

                    {e.hasOwnProperty('place') && <div>{e.place.city.name}, {e.place.country.name}</div>}

                    <div><a href={e.url} target='_blank' className='btn' rel="noreferrer">Buy tickets</a></div>
                    
                  </div>
                </div>
              </div>
            </div>
            )})}

            <Pagination data={data} currentPage={currentPage} numberOfPages={numberOfPages} setCurrentPage={setCurrentPage} /></>
        }
        </>
    )
}