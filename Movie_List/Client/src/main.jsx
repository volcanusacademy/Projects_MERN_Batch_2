import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieState from './context/MovieState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MovieState>
    <App />
  </MovieState>,
)
