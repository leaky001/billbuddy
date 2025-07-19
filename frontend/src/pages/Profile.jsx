import { useEffect, useState } from 'react';
import { getProfile } from '../services/authService';
import { toast } from 'react-toastify';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile()
      .then(setUser)
      .catch(() => toast.error('Could not load profile'));
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

