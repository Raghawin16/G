import React, { useState } from 'react';
import AddItem from './Components/AddItem';
import ItemList from './Components/ItemList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  // Create
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Update
  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  // Delete
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <AddItem addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} updateItem={updateItem} />
    </div>
  );
}

export default App;
