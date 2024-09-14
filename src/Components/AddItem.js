import React, { useState } from 'react';

function AddItem({ addItem }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ id: Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Add item"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-btn">Add</button>
    </form>
  );
}

export default AddItem;

