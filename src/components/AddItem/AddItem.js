import React from 'react';
import './AddItem.css';

const AddItem = () => {

    const addItemHandler = (event) => {
        event.preventDefault();
        const newItem = {
            id: Math.random().toString(),
            text: 'Random Item'
          };
          console.log(newItem);
    };


  return (
    <form className="new-item" onSubmit={addItemHandler}>
      <input type="text" />
      <button type="Submit">Add Item</button>
    </form>
  )

}

export default AddItem;