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
            default:
                break
        }
    }

    return (
        <div className="container text-center col-lg-4">

            {keyword !== '' && <span id='search-keyword' className="badge bg-badge">{keyword} <button name='keyword' onClick={removeSearch} aria-label='Remove keyword'><img src={removeIcon} alt='' /></button></span>}

            {city !== '' && <span id='search-city' className="badge bg-badge">{city.slice(0,1).toUpperCase()+city.slice(1)}<button name='city' onClick={removeSearch} aria-label='Remove city'><img src={removeIcon} alt='' /></button></span>}

            {datetime !== '' && <span id='search-datetime' className="badge bg-badge">{datetime.slice(0,10)} {datetime.slice(11,16)}<button name='datetime' onClick={removeSearch} aria-label='Remove date'><img src={removeIcon} alt='' /></button></span>}

            {category !== '' && <span id='search-category' className="badge bg-badge">{category}<button name='category' onClick={removeSearch} aria-label='Remove category'><img src={removeIcon} alt='' /></button></span>}

            {sort !== '' && <span id='search-sort' className="badge bg-badge">{sort.slice(0,1).toUpperCase()+sort.slice(1).replace(',', ' ')}<button name='sort' onClick={removeSearch} aria-label='Remove sorting'><img src={removeIcon} alt='' /></button></span>}

        </div>
    )
}