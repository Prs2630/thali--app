import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import App from './App'
import { store } from './redux/store';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
)