import React, { useState } from "react";

export default function TodoForm({ onSubmit }) {
  const [newTodoItem, setNewTodoItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newTodoItem === "") return;

    onSubmit(newTodoItem);

    setNewTodoItem("");
  }

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-row">
          <input
            value={newTodoItem}
            onChange={(e) => setNewTodoItem(e.target.value)}
            type="text"
            id="todo-item"
            placeholder="Add a todo..."
          />

          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
}
