import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
  import LandingPage from './pages/LandingPage';
   import Register from './pages/Register';
  import Login from './pages/Login';
 import Dashboard from './pages/Dashboard';
  import AddBill from './pages/AddBill'; import EditBill from './pages/EditBill';
 import MapView from './pages/MapView';
  import Profile from './pages/Profile';
 import NotFound from './pages/NotFound';




export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/add" element={<ProtectedRoute><AddBill /></ProtectedRoute>} />
          <Route path="/edit/:id" element={<ProtectedRoute><EditBill /></ProtectedRoute>} />
          <Route path="/map" element={<ProtectedRoute><MapView /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
