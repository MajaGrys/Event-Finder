import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity, changeDatetime, changeKeyword, changeSort } from '../redux/eventInfo';

export default function SearchOptions() {
    const [input, setInput] = useState({
    keyword: '',
    city: '',
    datetime: '',
    sort: ''
    })

    const { city } = useSelector(state => state.eventInfo);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value + (e.target.name === 'datetime' ? ':00Z' : '')
        }))
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(changeCity(input.city));
        dispatch(changeKeyword(input.keyword));
        dispatch(changeDatetime(input.datetime));
        dispatch(changeSort(input.sort));
    }

    return(
        <form className="events-search d-flex justify-content-center flex-wrap" onSubmit={handleSubmit}>

        <div className="form-floating">
          <input type="text" name='keyword' className="form-control" onChange={handleChange}></input>
          <label htmlFor="city">Enter a keyword</label>
        </div>

        <div className="form-floating">
          <input type="text" name='city' className="form-control" onChange={handleChange}></input>
          <label htmlFor="city">Enter a city</label>
        </div>

        <div className="form-floating">
          <input type="datetime-local" name='datetime' className="form-control" onChange={handleChange}></input>
          <label htmlFor="date">Enter a date</label>
        </div>

        <div className="form-floating mb-3">
          <select className="form-control" name='sort' onChange={handleChange}>
            <option value='relevance,desc'>Relevance</option>
            <option value='date,asc'>Date (asc)</option>
            <option value='date,desc'>Date (desc)</option>
            <option value='name,asc'>Name (asc)</option>
            <option value='name,desc'>Name (desc)</option>
          </select>
          <label htmlFor="date">Sort by</label>
        </div>

        <input type="submit" className="btn btn-primary mb-3" value="Search" />  
        </form>
    )
}