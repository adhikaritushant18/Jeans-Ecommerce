import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import {AppProvider} from './components/MainContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AppProvider>
  <Auth0Provider
    domain="dev-uhtp2b62taf7mzy4.us.auth0.com"
    clientId="5Zx8TQSX1ai0AcAl0Tmt1vah2gdLOk6r"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </AppProvider>
  </BrowserRouter>,
  </React.StrictMode>,
)

