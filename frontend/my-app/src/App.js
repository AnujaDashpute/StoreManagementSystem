import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutPage from './pages/Layout/Layout';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/HomePage';
import SignupPage from './pages/Signup/Signup';
import AdminDashboardPage from './pages/AdminDashboard/AdminDashboard';
import UserDashboardPage from './pages/UserDashboard/UserDashboard';
import StoreOwnerDashboardPage from './pages/StoreOwnerDashboard/StoreOwnerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/admin' element={<AdminDashboardPage/>}/>
        <Route path="/layout" element={<LayoutPage/>}/>
        <Route path='/user' element={<UserDashboardPage/>}/>
        <Route path='/storeowner' element={<StoreOwnerDashboardPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
