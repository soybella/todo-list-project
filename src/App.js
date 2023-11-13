import { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  let [addTask, setAddTask] = useState("");
  // let [taskList, setTaskList] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // setTaskList();
    // console.log(addTask);
    setAddTask(event.target.value);
  }

  function showTaskList(event) {
    // event.preventDefault();
    setAddTask(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> What's the plan for today? </h1>
        <form onClick={handleSubmit}>
          <input
            type="text"
            placeholder="Add a task"
            onChange={showTaskList}
          ></input>
          <input
            type="submit"
            className="button"
            value="Add"
            // onClick={showTaskList}
          ></input>
        </form>
        <TaskList task={addTask} />
      </header>
    </div>
  );
}

export default App;
