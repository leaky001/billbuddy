import { Link, useNavigate } from 'react-router-dom';
import { deleteBill } from '../services/billService';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

export default function BillCard({ bill }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('Delete this bill?')) {
      try {
        await deleteBill(bill._id);
        toast.success('Bill deleted');
        window.location.reload(); // or lift state to parent
      } catch {
        toast.error('Delete failed');
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-[#1f1f1f]">
      <h3 className="text-lg font-bold text-indigo">{bill.title}</h3>
      <p>₦{bill.amount}</p>
      <p>Due: {dayjs(bill.dueDate).format('DD MMM YYYY')}</p>
      <p>Status: <span className={bill.status === 'Paid' ? 'text-green-500' : 'text-red-500'}>{bill.status}</span></p>
      {bill.location?.name && <p>Location: {bill.location.name}</p>}

      <div className="flex gap-4 mt-2">
        <Link to={`/edit/${bill._id}`} className="text-sm text-indigo">Edit</Link>
        <button onClick={handleDelete} className="text-sm text-red-500">Delete</button>
      </div>
    </div>
  );
}
