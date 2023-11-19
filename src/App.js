import { useState } from "react";
// import './App.css';

function App() {
  const [newTodoItem, setNewTodoItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTodoItem, completed: false },
      ];
    });

    setNewTodoItem("");
  }

  function handleChange(event) {
    setNewTodoItem(event.target.value);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-row">
          <label htmlFor="todo-item">New Todo</label>
          <input
            value={newTodoItem}
            onChange={handleChange}
            type="text"
            id="todo-item"
          />
        </div>
        <button className="btn">Add Todo</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
