export default function ExpenseForm() {

    return (
        <table className="table table-striped p-5 table-bordered card">
        <div className="card">
            <h1 className="strong">Add Expense</h1>
            <small>Enter your expenses</small>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="expense" className="form-label">Expense</label>
                        <input type="text" className="form-control" id="expense" placeholder="Enter Expense" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" placeholder="Enter Description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category" placeholder="Enter Category" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="amount" placeholder="Enter Amount" />
                    </div>
                    <button type="submit" className="btn btn-info active">Submit</button>
                </form>
            </div>


        </div>
        </table>

    )
}