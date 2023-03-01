// redux imports
import { useSelector } from "react-redux";

// style import
import './ErrorMessage.scss';


export const ErrorMessage = () => {
   const { error } = useSelector(state => state.weather);


   return (
      <p className="error__message">
         {error}
      </p>
   );
}