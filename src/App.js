import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NewVideo from './components/NewVideo';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new video" element={<NewVideo />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;