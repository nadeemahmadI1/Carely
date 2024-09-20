// src/components/AddServiceForm.js
import React, { useState } from "react";

const AddServiceForm = ({ onAdd, isEditing, serviceToEdit, onUpdate }) => {
  const [name, setName] = useState(isEditing ? serviceToEdit.name : "");
  const [description, setDescription] = useState(
    isEditing ? serviceToEdit.description : ""
  );
  const [price, setPrice] = useState(isEditing ? serviceToEdit.price : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      if (isEditing) {
        onUpdate({ name, description, price });
      } else {
        onAdd({ name, description, price });
      }
      setName("");
      setDescription("");
      setPrice("");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? "Update Service" : "Add New Service"}</h2>
      <div>
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">
        {isEditing ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
};

export default AddServiceForm;
