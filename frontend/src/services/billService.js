const API_URL = 'http://localhost:5000/api/bills';

export const getBills = async () => {
  try {
    const res = await fetch(API_URL, {
      credentials: 'include',
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Fetch error:', res.status, errorText);
      throw new Error('Failed to fetch bills');
    }
    return res.json();
  } catch (err) {
    console.error('getBills error:', err.message);
    throw err;
  }
};

export const deleteBill = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Delete error:', res.status, errorText);
      throw new Error('Failed to delete bill');
    }

    return res.json();
  } catch (err) {
    console.error('deleteBill error:', err.message);
    throw err;
  }
};



export const createBill = async (billData) => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(billData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Create error:', res.status, errorText);
      throw new Error('Failed to create bill');
    }

    return res.json();
  } catch (err) {
    console.error('createBill error:', err.message);
    throw err;
  }
};

export const updateBill = async (id, billData) => {
  try {
    const res = await fetch(`http://localhost:5000/api/bills/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(billData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Update error:', res.status, errorText);
      throw new Error('Failed to update bill');
    }

    return res.json();
  } catch (err) {
    console.error('updateBill error:', err.message);
    throw err;
  }
};

