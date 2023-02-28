// react imports
import React    from 'react';
import ReactDOM from 'react-dom/client';

// redux imports
import { store }    from './store/store';
import { Provider } from 'react-redux';

// components imports
import { App } from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
   // <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   // </React.StrictMode>,
)
