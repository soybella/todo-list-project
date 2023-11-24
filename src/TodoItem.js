import React from "react";

export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <div className="TodoItem">
      <li key={id}>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button className="btn btn-delete" onClick={() => deleteTodo(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    </div>
  );
}
