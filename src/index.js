import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beer from './pages/beer';
import Result from './pages/result';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Beer/>} />
        <Route path="/result/:id" element={<Result/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
) 
