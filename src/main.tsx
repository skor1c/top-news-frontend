import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import { CountryProvider } from './providers/country.provider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountryProvider>
      <RouterProvider router={router} />
    </CountryProvider>
  </React.StrictMode>
);
