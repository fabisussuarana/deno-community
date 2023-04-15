import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import Page02 from './pages/Page';

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Page02 />
  </React.StrictMode>,
)
