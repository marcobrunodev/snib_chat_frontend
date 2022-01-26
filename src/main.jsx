import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './GlobalStyles'
import Login from './pages/Login'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />

    <Login />
  </React.StrictMode>,
  document.getElementById('root')
)
