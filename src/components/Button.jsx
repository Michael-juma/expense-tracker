export default function Button({ text }) {
    return (
        <div className="container mt-4">
        <input  placeholder="search expenses"/>
        <button className="btn btn-primary" >
            {text}
            click me
        </button>
        </div>
    )
}