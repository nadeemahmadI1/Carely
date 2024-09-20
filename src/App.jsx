// src/App.js
import React, { useState } from "react";
import ServiceList from "./components/ServiceList.jsx";
import AddServiceForm from "./components/AddServiceForm.jsx";
import "./App.css";

const App = () => {
  const [services, setServices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const editService = (index) => {
    setIsEditing(true);
    setCurrentService(services[index]);
    setEditIndex(index);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === editIndex ? updatedService : service
    );
    setServices(updatedServices);
    setIsEditing(false);
    setCurrentService(null);
  };

  return (
    <div className="App">
      <AddServiceForm
        onAdd={addService}
        isEditing={isEditing}
        serviceToEdit={currentService}
        onUpdate={updateService}
      />
      <ServiceList
        services={services}
        onEdit={editService}
        onDelete={deleteService}
      />
    </div>
  );
};

export default App;
