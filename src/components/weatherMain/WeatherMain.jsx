// date imports
import { day, monthDay, month, year } from '../../date';

// redux imports
import { useSelector } from 'react-redux';

// image imports
import locationIcon from '../../assets/images/location.svg';
import sunIcon from '../../assets/images/sun.svg';

// style imports
import './WeatherMain.scss'

export const WeatherMain = () => {
   const { weather } = useSelector(store => store.weather);


   return (
      <section className="weather__main weather-main">

         <header className="weather-main__header">
            <h2 className="weather-main__title title-h2">{day}</h2>
            <p className="weather-main__date">{`${monthDay} ${month} ${year}`}</p>
            <p className="weather-main__city">
               <span>
                  <img src={locationIcon} alt="location icon" />
               </span>
               {weather.city}
            </p>
         </header>

         <div className="weather-main__info weather-info">
            <span className="weather-info__image">
               <img src={sunIcon} alt="sun icon" />
            </span>
            <h1 className="weather-info__title title-h1">{weather.temp?.toFixed()} °C</h1>
            <h3 className="weather-info__subtitle title-h3">{weather.description}</h3>
         </div>

      </section>
   );
}