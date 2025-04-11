export default function ExpenseForm() {

    return (
        
        <div className="card mt-4 p-5 bg-light text-dark col-md-6">
            <h1 className="strong">Add Expense</h1>
            <small>Enter your expenses</small>
            <div className=" col-md-6">
                <form className="row g-3  col-md-6">
                    <div>
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
        

    )
}