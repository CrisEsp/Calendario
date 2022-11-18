import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalendarApp } from './CalendarApp'
import './styles.css'
import {store} from './store';
//import {Provider} from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <CalendarApp/>
  </React.StrictMode>

)
