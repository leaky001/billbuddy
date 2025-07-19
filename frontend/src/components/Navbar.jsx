import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { toast } from 'react-toastify';

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('user');
    toast.success('Logged out');
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-eerie border-b p-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-indigo">BillBuddy</Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-lavender">Dashboard</Link>
            <Link to="/map" className="hover:text-lavender">Map</Link>
            <Link to="/profile" className="hover:text-lavender">Profile</Link>
            <button onClick={handleLogout} className="text-sm px-4 py-2 bg-lavender text-white rounded hover:bg-violet">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-lavender">Login</Link>
            <Link to="/register" className="hover:text-lavender">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
