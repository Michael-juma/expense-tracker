
export default function ExpeneseItems() {
    const expenses = [
        { id: 1,
            amount: 50,
            expense: " food", 
            description: "Groceries", 
            category: "food",
            date: "2024-1-23" 
        },
        { id: 2,
            amount: 100,
            expense: " Cloths", 
            description: "New Clothes", 
            category: "clothing",
            date: "2024-10-24" 
        }

    ]
    return (
        <div className="container table-responsive col-md-6">
            <table className="table table-striped p-5 table-bordered table-hover mt-4  ">
                <thead className="table-dark">
                    <tr >

                        <td>Expense</td>
                        <td>Description</td>
                        <td>Category</td>
                        <td>Amount</td>
                        <td>Date</td>
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
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}