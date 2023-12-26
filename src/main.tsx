import React from 'react';
import ReactDOM from 'react-dom/client';
import { Index } from './Index';
import { Tetrice } from './Tetrice';
import { ErrorPage } from './ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{
  // my current task screen
  path: '', element: <Index />,
  errorElement: <ErrorPage />, 
  children: [
    { path: 'tetrice', element: <Tetrice /> }
]}]);

ReactDOM.createRoot(document.getElementById('AppSurface') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/*
ReactDOM.createRoot(document.getElementById('AppSurface') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
*/