import React from 'react';
import ReactDOM from 'react-dom/client';
import { Index } from './Index';

ReactDOM.createRoot(document.getElementById('AppSurface') as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)