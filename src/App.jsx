// components imports
import { WeaderCard } from './components/weatherCard/WeaderCard';  

// style imports
import './style/App.scss';



export const App = () => {


   return (
      <div className="app">
         <div className="_wrapper">

            <main className="main">
               <div className="_container">
                  <WeaderCard />

               </div>
            </main>

         </div>
      </div>
   )
}