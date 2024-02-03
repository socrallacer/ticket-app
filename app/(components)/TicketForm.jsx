/* Next server use serveside javascript by default, but sometimes we want to use
Clientside javascript*/
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
//Función de componente
const TicketForm = () => {
  const router = useRouter();
  //Función handler de cuan
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    //Función proporcionada por useState, utilizada para cambiar estado de formulario (ampliación en notion)
    setFormData((prevState) => ({
      /*operador spread (...) para copiar estado anterior  y luego sobrescribir el valor del
         campo específico que ha cambiado utilizando el nombre del campo como clave entre corchetes*/
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets/", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket.");
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  //Retorna forumulario
  return (
    <div className="flex justify-center ">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        ></input>
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        ></textarea>
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Sotware Problem">Sotware Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1} //Doble igual para no tener en cuenta el tipo
          ></input>
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2} //Doble igual para no tener en cuenta el tipo
          ></input>
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3} //Doble igual para no tener en cuenta el tipo
          ></input>
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4} //Doble igual para no tener en cuenta el tipo
          ></input>
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5} //Doble igual para no tener en cuenta el tipo
          ></input>
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="Status" value={formData.status} onChange={handleChange}>
          <option value="Not Started">Not Started</option>
          <option value=" Started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" className="btn" value="Create Ticket"></input>
      </form>
    </div>
  );
};

export default TicketForm;
