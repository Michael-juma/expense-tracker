export default function ExpeneseItems({ expenses, setExpenses }) {
    const handleDelete = (id) => {
      const updated = expenses.filter((exp) => exp.id !== id);
      setExpenses(updated);
    };
  
    return (
      <div className="container table-responsive col-md-6">
        <table className="table table-striped p-5 table-bordered table-hover mt-4">
          <thead className="table-dark">
            <tr>
              <td>Expense</td>
              <td>Description</td>
              <td>Category</td>
              <td>Amount</td>
              <td>Date</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.expense}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>
                    
                    <input  placeholder="search expenses"/>
                    <button className="btn btn-danger"onClick={() => handleDelete(expense.id)}>
                    Delete
                  </button> 
                  
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  