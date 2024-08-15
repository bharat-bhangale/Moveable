import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-zsmy3nlgzjdg6w25.us.auth0.com"
      clientId="gVPZYbXkxcVzuHmGkEF6s7j46FtbdbRV"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage" // Add this line to persist the auth state
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);