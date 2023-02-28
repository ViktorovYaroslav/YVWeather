// style import
import './Loader.scss';

export const Loader = () => {
   return (
      <div className='loader'>
         <div className="loader__wrapper">
            <h2 className="loader__title title-h2"><span>YV</span>Weather</h2>
            <div className="loader__spinner"></div>
         </div>
      </div>
   );
}