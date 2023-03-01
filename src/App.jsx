// component imports
import { WeatherCard } from './components/weatherCard/WeatherCard';

// style imports
import './style/App.scss';


export const App = () => {


   return (
      <div className="app">
         <div className="_wrapper">
            <main className="main">
               <div className="_container">
                  <WeatherCard />
               </div>
            </main>
         </div>
      </div>
   )
}