export default function Button({ text }) {
    return (
        <div>
        <input  placeholder="search expenses"/>
        <button className="btn btn-primary" >
            {text}
            click me
        </button>
        </div>
    )
}