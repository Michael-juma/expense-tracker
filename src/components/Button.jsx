export default function Button({ type, text, onClick }) {
    return (
        <button className="btn btn-primary"
        text align="center" 
        type={type} 
        onClick={onClick}>
            search Expense
        </button>
    )
}