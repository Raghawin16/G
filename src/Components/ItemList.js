import React, { useState } from 'react';

function ItemList({ items, deleteItem, updateItem }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditName(item.name);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateItem({ id: editId, name: editName });
    setEditId(null);
    setEditName('');
  };

  return (
    <div>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item">
            {editId === item.id ? (
              <form onSubmit={handleUpdate} className="edit-form">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="input-field"
                />
                <button type="submit" className="submit-btn">Update</button>
              </form>
            ) : (
              <>
                {item.name}
                <div>
                  <button onClick={() => handleEdit(item)} className="edit-btn">Edit</button>
                  <button onClick={() => deleteItem(item.id)} className="delete-btn">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
