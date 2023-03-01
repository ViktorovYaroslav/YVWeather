// react imports
import { useEffect } from 'react';

// component imports
import { WeatherSecound } from '../weatherSecound/WeatherSecound';
import { WeatherMain } from '../weatherMain/WeatherMain';
import { Loader } from '../loader/Loader';
import { ErrorMessage } from '../error/ErrorMessage';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../store/weatherSlice';

// react animation imports
import { CSSTransition } from 'react-transition-group';

// style imports
import './WeatherCard.scss'


export const WeatherCard = () => {
   const dispatch = useDispatch();
   const { status, error } = useSelector(store => store.weather);

   // getting data on first loading 
   useEffect(() => {
      dispatch(fetchWeather());
   }, [])

   
   return (
      <> 
         {/* show error */}
         <CSSTransition in={!!error} timeout={200} classNames="show-error" unmountOnExit>
            <ErrorMessage />
         </CSSTransition>
         
         {/* show loader */}
         <CSSTransition in={status === 'loading'} timeout={200} classNames="show-loader" unmountOnExit>
            <Loader />
         </CSSTransition>

         <div className="weather__card">
            <WeatherMain />
            <WeatherSecound />
         </div>
      </>
   );
}