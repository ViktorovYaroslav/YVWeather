// component imports
import { WeatherSearch } from '../weatherSearch/WeatherSearch';

// redux imports
import { useSelector } from 'react-redux';

// style imports
import './WeatherSecound.scss'

export const WeatherSecound = () => {
   const { weather } = useSelector(store => store.weather);


   return (
      <section className="weather__secound">

         <header className="weather-secound__header">
            <h4 className="weather-secound__title title-h4">
               feels like
               <span className="weather-secound__title-info">{weather.feelsLike?.toFixed()} °C</span>
            </h4>
            <h4 className="weather-secound__title title-h4">
               HUMIDITY
               <span className="weather-secound__title-info">{weather.humidity} %</span>
            </h4>
            <h4 className="weather-secound__title title-h4">
               WIND
               <span className="weather-secound__title-info">{weather.wind?.toFixed(1)} km/h</span>
            </h4>
         </header>

         <WeatherSearch />

      </section>
   );
}