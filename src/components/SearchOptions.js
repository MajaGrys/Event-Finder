import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeKeyword, changeCity, changeDatetime, changeCategory, changeSort } from '../redux/eventInfo';

export default function SearchOptions() {
    const [input, setInput] = useState({
    keyword: '',
    city: '',
    datetime: '',
    category: '',
    sort: ''
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value + (e.target.name === 'datetime' ? ':00Z' : '')
        }))
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(changeKeyword(input.keyword));
        dispatch(changeCity(input.city));
        dispatch(changeDatetime(input.datetime));
        dispatch(changeCategory(input.category));
        dispatch(changeSort(input.sort));
    }

    return(
        <form className="events-search d-flex justify-content-center flex-wrap" onSubmit={handleSubmit}>

        <div className="form-floating">
          <input type="text" name='keyword' className="form-control" onChange={handleChange}></input>
          <label id="keyword">Enter a keyword</label>
        </div>

        <div className="form-floating">
          <input type="text" name='city' className="form-control" onChange={handleChange}></input>
          <label id="city">Enter a city</label>
        </div>

        <div className="form-floating">
          <input type="datetime-local" name='datetime' className="form-control" onChange={handleChange}></input>
          <label id="date">Enter a date</label>
        </div>

        <div className="form-floating mb-3">
          <select className="form-control" name='category' onChange={handleChange}>
            <option value=''>Any</option>
            <option value='Music'>Music</option>
            <option value='Sports'>Sports</option>
            <option value='Arts & Theatre'>Arts & Theatre</option>
            <option value='Film'>Film</option>
            <option value='Fairs & Festivals'>Fairs & Festivals</option>
            <option value='Family'>Family</option>
          </select>
          <label id="category">Category</label>
        </div>

        <div className="form-floating mb-3">
          <select className="form-control" name='sort' onChange={handleChange}>
            <option value='relevance,desc'>Relevance</option>
            <option value='date,asc'>Date (asc)</option>
            <option value='date,desc'>Date (desc)</option>
            <option value='name,asc'>Name (asc)</option>
            <option value='name,desc'>Name (desc)</option>
          </select>
          <label id="sort">Sort by</label>
        </div>

        <input type="submit" className="btn btn-primary mb-3" value="Search" />  
        </form>
    )
}