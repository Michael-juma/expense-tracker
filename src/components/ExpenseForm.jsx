import { useState } from 'react';

export default function ExpenseForm({ setExpenses }) {
  const [formData, setFormData] = useState({
    expense: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      ...formData,
      id: Math.floor(Math.random() * 10000)
    };

    setExpenses((prev) => [...prev, newExpense]);

    setFormData({
      expense: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  };

  return (
    <div className="card mt-4 p-5 bg-light text-dark col-md-6">
      <h1 className="strong">Add Expense</h1>
      <small>Enter your expenses</small>
      <form onSubmit={handleSubmit} className="row g-3 col-md-12">
        {['expense', 'description', 'category', 'amount', 'date'].map((field) => (
          <div key={field} className="mb-3">
            <label htmlFor={field} className="form-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'amount' ? 'number' : field === 'date' ? 'date' : 'text'}
              className="form-control"
              id={field}
              name={field}
              placeholder={`Enter ${field}`}
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-info btn-sm active">Submit</button>
      </form>
    </div>
  );
}
