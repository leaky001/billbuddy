import { useState } from 'react';
import { createBill } from '../services/billService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AddBill() {
  const [form, setForm] = useState({
    title: '', amount: '', dueDate: '', status: 'Unpaid', category: '', location: { name: '', lat: '', lng: '' }
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formatted = { ...form, amount: parseFloat(form.amount) };
      await createBill(formatted);
      toast.success('Bill added!');
      navigate('/dashboard');
    } catch {
      toast.error('Could not add bill');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Bill</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input placeholder="Title" className="p-2 border rounded" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input type="number" placeholder="Amount" className="p-2 border rounded" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        <input type="date" className="p-2 border rounded" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
        <input placeholder="Category" className="p-2 border rounded" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="p-2 border rounded">
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
        </select>
        <input placeholder="Location Name" className="p-2 border rounded" value={form.location.name} onChange={(e) => setForm({ ...form, location: { ...form.location, name: e.target.value } })} />
        <button className="bg-indigo text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}


