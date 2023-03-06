// react imports
import { useState } from 'react';

// redux imports
import { useSelector, useDispatch }  from 'react-redux';
import { fetchWeather, errorChange } from '../../store/weatherSlice';

// image imports
import searchIcon from '../../assets/images/search-address-book-svgrepo-com.svg';

// style import
import './WeatherSearch.scss'

export const WeatherSearch = () => {
   const dispatch = useDispatch();

   const [city, setCity] = useState('');

   const handleRequestOw = async (e) => {
      e.preventDefault();

      if (city.trim().length) {
         dispatch(fetchWeather(city));
         // reset to zero input value
         setCity('');
         // reset to zero error status
         // it gives opportunity delete error message by timer
         setTimeout(() => dispatch(errorChange()), 4000);
      }
   }


   return (
      <form className="weather-secound__search" onSubmit={handleRequestOw}>
         <input type="text" placeholder='Find a city...' onChange={(e) => setCity(e.target.value)} value={city} />
         <button>
            <img src={searchIcon} alt="search icon" />
         </button>
      </form>
   );
}