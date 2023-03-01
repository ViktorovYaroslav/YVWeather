// react imports
import React    from 'react';
import ReactDOM from 'react-dom/client';

// redux imports
import { store }    from './store/store';
import { Provider } from 'react-redux';

// components imports
import { App } from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
   // React strict mode was commented out by reason of next error:
   // "findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition2 which is inside StrictMode. 
   // Instead, add a ref directly to the element you want to reference."
   // Error happened because of react-transition-group.
   // <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   // </React.StrictMode>,
)
