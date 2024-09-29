import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home'; // Corrected path
import Tours from '../pages/Tours'; // Corrected path
import ToursDetails from '../pages/TourDetails'; // Corrected path
import Login from '../pages/Login'; // Corrected path
import Register from '../pages/Register'; // Corrected path
import SearchResultList from '../pages/SearchResultList'; // Corrected path
import ThankYou from '../pages/ThankYou';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<ToursDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/tours/search' element={<SearchResultList />} />
    </Routes>
  );
};

export default Router;
