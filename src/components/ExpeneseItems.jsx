import ExpenseForm from "./ExpenseForm"
export default function ExpeneseItems(){
    return(
        <table className="table table-striped p-5 table-bordered ">

            <div>
            <thead className="table table-striped p-5 table-bordered ">
                <tr >
                    
                    <td>Expense</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Amount</td>
                    <td>Date</td>
                </tr>
            </thead>
            <ExpenseForm/>
            </div>
        </table>
    )
}