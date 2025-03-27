import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { AppContext } from './context/AppContext';

const App = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard'
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          } />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App
