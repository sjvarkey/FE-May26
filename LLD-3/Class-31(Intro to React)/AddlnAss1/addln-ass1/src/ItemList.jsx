import React from 'react';

export default function ItemList({ list }) {
    // Handle missing or non-array list gracefully
    if (!Array.isArray(list) || list.length === 0) return <div></div>;

    return (
        <ul>
            {list.map((item, idx) => (
                <li key={idx}>{typeof item === 'string' ? item : item.name}</li>
            ))}
        </ul>
    );
}