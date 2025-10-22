import React from 'react';

export default function List() {
    let stationary = ["Pen", "Pencil", "Eraser", "Ruler"];
    let list2=["Hello" ,"Hi", "bi"]
    return (
        <div>
            <h2>List Items</h2>
            {/* Render the ItemList component here */}
            <ItemList list={stationary}/>
            <ItemList list={list2}/>
        </div>
    );
}