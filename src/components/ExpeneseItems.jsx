import ExpenseForm from "./ExpenseForm"
export default function ExpeneseItems(){
    return(
        <div className="container">
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
            <ExpenseForm/>
            
        </table>
        </div>
    )
}