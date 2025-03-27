import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "" });
  const [editItem, setEditItem] = useState(null);

  const apiUrl = "https://localhost:7042/api/hello";

  // Fetch items from the API
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setItems(response.data);
    });
  }, []);

  // Handle creating a new item
  const handleCreate = () => {
    axios
      .post(apiUrl, newItem)
      .then((response) => {
        setItems([...items, response.data]);
        setNewItem({ name: "", description: "" });
      })
      .catch((error) => console.error(error));
  };

  // Handle updating an item
  const handleUpdate = () => {
    axios
      .put(`${apiUrl}/${editItem.id}`, editItem)
      .then(() => {
        setItems(
          items.map((item) =>
            item.id === editItem.id ? editItem : item
          )
        );
        setEditItem(null);
      })
      .catch((error) => console.error(error));
  };

  // Handle deleting an item
  const handleDelete = (id) => {
    axios
      .delete(`${apiUrl}/${id}`)
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Items</h1>

      <div>
        <h3>Create New Item</h3>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
          placeholder="Description"
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      <div>
        <h3>Edit Item</h3>
        {editItem && (
          <>
            <input
              type="text"
              value={editItem.name}
              onChange={(e) =>
                setEditItem({ ...editItem, name: e.target.value })
              }
              placeholder="Name"
            />
            <input
              type="text"
              value={editItem.description}
              onChange={(e) =>
                setEditItem({ ...editItem, description: e.target.value })
              }
              placeholder="Description"
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setEditItem(null)}>Cancel</button>
          </>
        )}
      </div>

      <div>
        <h3>Items List</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>: {item.description}
              <button onClick={() => setEditItem(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;


