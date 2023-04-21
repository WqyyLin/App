import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from "./router/Route";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Route />
);