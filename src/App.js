import { useState } from 'react';
import './App.css';
import ExpeneseItems from './components/ExpeneseItems';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      expense: 'Food',
      description: 'Milk, bread, and eggs',
      category: 'Groceries',
      amount: 500,
      date: '2024-01-23'
    }
  ]);

  return (
    <div className="container">
      <Header />
      <ExpenseForm setExpenses={setExpenses} />
      <ExpeneseItems expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
