import React from 'react';

//react dom is the implementatio for the web
//react native is the implementation for the app
import ReactDOM from 'react-dom/client';

import App from './App';

//react khud k dom bnata hai which is callled virtual dom where ther is one methid called create dom 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

