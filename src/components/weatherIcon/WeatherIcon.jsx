// redux imports
import { useSelector } from 'react-redux';

// image imports
import clearIcon        from '../../assets/images/weatherIcons/clear.svg';
import thunderstormIcon from '../../assets/images/weatherIcons/thunderstorm.svg';
import drizzleIcon      from '../../assets/images/weatherIcons/drizzle.svg';
import rainIcon         from '../../assets/images/weatherIcons/rain.svg';
import snowIcon         from '../../assets/images/weatherIcons/snow.svg';
import cloudsIcon       from '../../assets/images/weatherIcons/clouds.svg';
import fogIcon          from '../../assets/images/weatherIcons/fog.svg';

// style import
import './WeatherIcon.scss';

export const WeatherIcon = () => {
   const { weather } = useSelector(store => store.weather);

   let weatherIcon;

   switch (weather?.weatherMain?.toLowerCase()) {
      case 'thunderstorm':
         weatherIcon = thunderstormIcon;
         break;
      case 'drizzle':
         weatherIcon = drizzleIcon;
         break;
      case 'rain':
         weatherIcon = rainIcon;
         break;
      case 'snow':
         weatherIcon = snowIcon;
         break;
      case 'clear':
         weatherIcon = clearIcon;
         break;
      case 'clouds':
         weatherIcon = cloudsIcon;
         break;
      default:
         weatherIcon = fogIcon;
         break;
   }

   return (
      <span className="weather-info__image">
         <img src={weatherIcon} alt="sun icon" />
      </span>
   );
}