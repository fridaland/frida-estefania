import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import Codes from './routes/codes';
import Passion from './routes/passion';
import Huellitas from './routes/huellitas';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/codes',
    element: <Codes />,
  },
  {
    path: '/passion',
    element: <Passion />,
  },
  {
    path: '/huellitas',
    element: <Huellitas />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
