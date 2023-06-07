import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ScheduleContextProvider } from './AppContext';
import { router } from './routes';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScheduleContextProvider>
      <RouterProvider router={router} />
    </ScheduleContextProvider>
  </React.StrictMode>
);