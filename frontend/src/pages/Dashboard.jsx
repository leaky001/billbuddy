import { useEffect, useState } from 'react';
import { getBills } from '../services/billService';
import BillCard from '../components/BillCard';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const [bills, setBills] = useState([]);

useEffect(() => {
  async function fetchBills() {
    try {
      const data = await getBills();
      console.log("Fetched Bills:", data);
      setBills(data);
    } catch (err) {
      toast.error('Failed to load bills');
    }
  }
  fetchBills();
}, []);




  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Bills</h2>
        <Link to="/add" className="px-4 py-2 bg-indigo text-white rounded hover:bg-lavender">+ Add Bill</Link>
      </div>

      <div className="grid gap-4">
        {bills.length ? bills.map(bill => (
          <BillCard key={bill._id} bill={bill} />
        )) : (
          <p className="text-center">No bills yet. Add your first bill!</p>
        )}
      </div>
    </div>
  );
}


