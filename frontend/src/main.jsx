// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter as Router } from 'react-router-dom' 
// ReactDOM.createRoot(document.getElementById('root')).render(

//   <React.StrictMode>
//     <Router>
//     <App />
//     </Router>
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter as Router,Navigate } from 'react-router-dom'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <App/>
    </Router>
);
