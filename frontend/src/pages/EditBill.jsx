import { useEffect, useState } from 'react';
import { getBills, updateBill } from '../services/billService';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditBill() {
  const [form, setForm] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBill() {
      try {
        const allBills = await getBills();
        const bill = allBills.find(b => b._id === id);
        setForm(bill);
      } catch {
        toast.error('Failed to fetch bill');
      }
    }
    fetchBill();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBill(id, form);
      toast.success('Bill updated');
      navigate('/dashboard');
    } catch {
      toast.error('Update failed');
    }
  };

  if (!form) return <p className="text-center p-4">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Bill</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="p-2 border rounded" />
        <input value={form.amount} type="number" onChange={(e) => setForm({ ...form, amount: e.target.value })} className="p-2 border rounded" />
        <input value={form.dueDate.slice(0, 10)} type="date" onChange={(e) => setForm({ ...form, dueDate: e.target.value })} className="p-2 border rounded" />
        <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="p-2 border rounded" />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="p-2 border rounded">
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
        </select>
        <input value={form.location.name} onChange={(e) => setForm({ ...form, location: { ...form.location, name: e.target.value } })} className="p-2 border rounded" />
        <button className="bg-indigo text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
}


