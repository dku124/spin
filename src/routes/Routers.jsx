import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Start from '../pages/start/Start';
import Result from '../pages/result/Result';
import Clock from '../pages/clock/Clock';

const Routers = () => {
  return (
   <Routes>
    <Route path="/" element={<Navigate to="/start" />} />
    <Route path="/start" element={<Start />} />
    <Route path="/clock" element={<Clock />} />
    <Route path="/:slug" element={<Result />} />
   </Routes>
  );
};

export default Routers;