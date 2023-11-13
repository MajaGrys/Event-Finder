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
        input.keyword !== '' && dispatch(changeKeyword(input.keyword));
        input.city !== '' && dispatch(changeCity(input.city));
        input.datetime !== '' && dispatch(changeDatetime(input.datetime));
        input.category !== '' && dispatch(changeCategory(input.category));
        input.sort !== '' && dispatch(changeSort(input.sort));
        setInput({
          keyword: '',
          city: '',
          datetime: '',
          category: '',
          sort: ''
        })
        e.target.reset()
    }

    return(
        <form className="events-search d-flex justify-content-center flex-wrap mb-3" onSubmit={handleSubmit}>

        <div className="form-floating">
          <input type="text" id='keyword' name='keyword' className="form-control" onChange={handleChange}></input>
          <label htmlFor="keyword">Enter a keyword</label>
        </div>

        <div className="form-floating">
          <input type="text" id='city' name='city' className="form-control" onChange={handleChange}></input>
          <label htmlFor="city">Enter a city</label>
        </div>

        <div className="form-floating">
          <input type="datetime-local" id='datetime' name='datetime' className="form-control" onChange={handleChange}></input>
          <label htmlFor="datetime">Enter a date</label>
        </div>

        <div className="form-floating">
          <select className="form-control" id='category' name='category' onChange={handleChange}>
            <option value=''>Any</option>
            <option value='Music'>Music</option>
            <option value='Sports'>Sports</option>
            <option value='Arts & Theatre'>Arts & Theatre</option>
            <option value='Film'>Film</option>
            <option value='Fairs & Festivals'>Fairs & Festivals</option>
            <option value='Family'>Family</option>
          </select>
          <label htmlFor="category">Category</label>
        </div>

        <div className="form-floating">
          <select className="form-control" id='sort' name='sort' onChange={handleChange}>
            <option value='relevance,desc'>Relevance</option>
            <option value='date,asc'>Date (asc)</option>
            <option value='date,desc'>Date (desc)</option>
            <option value='name,asc'>Name (asc)</option>
            <option value='name,desc'>Name (desc)</option>
          </select>
          <label htmlFor="sort">Sort by</label>
        </div>

        <input type="submit" className="btn p-3" value="Search" />  
        </form>
    )
}