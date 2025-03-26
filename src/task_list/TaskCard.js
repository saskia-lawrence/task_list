import React from "react";
function TaskCard({ taskName, taskDesc }) {
  return (
    <li>
      <div>
        <h2>{taskName}</h2>
      </div>
      {taskName && taskDesc && <p>{taskDesc}</p>}
    </li>
  );
}
export default TaskCard;
