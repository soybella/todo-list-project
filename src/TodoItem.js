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
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button className="btn" onClick={() => deleteTodo(id)}>
          🗑
        </button>
      </li>
    </div>
  );
}