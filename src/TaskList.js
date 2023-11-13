import React from "react";

export default function TaskList(props) {
  console.log(props.task);
  if (props.task) {
    return (
      <div className="TaskList">
        <p>Test</p>
      </div>
    );
  } else {
    return null;
  }
}
