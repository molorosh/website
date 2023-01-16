import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import FacePrivacy from './FacePrivacy';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/privacy/face' element={<FacePrivacy/>}></Route>
    </Routes>
  );
}

export default Main;
