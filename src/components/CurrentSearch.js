import removeIcon from '../img/x-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeKeyword, changeCity, changeDatetime, changeCategory, changeSort } from '../redux/eventInfo';

export default function CurrentSearch() {
    const { keyword, city, datetime, category, sort } = useSelector(state => state.eventInfo);
    const dispatch = useDispatch();

    const removeSearch = (e) => {
        const input = e.currentTarget.name
        switch (input) {
            case "keyword":
                dispatch(changeKeyword(''))
                break
            case "city":
                dispatch(changeCity(''))
                break
            case "datetime":
                dispatch(changeDatetime(''))
                break
            case "category":
                dispatch(changeCategory(''))
                break
            case "sort":
                dispatch(changeSort(''))
                break
        }
    }

    return (
        <div className="container text-center col-lg-4 fs-5">
            {keyword != '' && <span className="badge bg-badge">{keyword} <button name='keyword' onClick={removeSearch}><img src={removeIcon} /></button></span>}
            {city != '' && <span className="badge bg-badge">{city.slice(0,1).toUpperCase()+city.slice(1)}<button name='city' onClick={removeSearch}><img src={removeIcon} /></button></span>}
            {datetime != '' && <span className="badge bg-badge">{datetime.slice(0,10)} {datetime.slice(11,16)}<button name='datetime' onClick={removeSearch}><img src={removeIcon} /></button></span>}
            {category != '' && <span className="badge bg-badge">{category}<button name='category' onClick={removeSearch}><img src={removeIcon} /></button></span>}
            {sort != '' && <span className="badge bg-badge">{sort.slice(0,1).toUpperCase()+sort.slice(1).replace(',', ' ')}<button name='sort' onClick={removeSearch}><img src={removeIcon} /></button></span>}
        </div>
    )
}