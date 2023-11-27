import React from 'react';
import ReactDOM from 'react-dom/client';

import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CountryProvider } from './providers/country.provider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CountryProvider>
        <RouterProvider router={router} />
      </CountryProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
