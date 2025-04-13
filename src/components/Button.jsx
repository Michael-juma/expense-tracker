import React, { useState } from 'react';
export default function Button({ text, onSearch}) {
    const [query, setQuery] = useState('');
const handleSearch = () => {
    if (onSearch) {
        onSearch(query);
    }
}
    return (
        <div className="d-flex gap-2 my-3">
        <input type="text" className="form-control" placeholder="search expenses " value={query} onChange={(event)=>setQuery(event.target.value)}/>
        <button className="btn btn-primary" onClick={handleSearch} >
            {text || 'Search'}
            
        </button>
        </div>
    )
}