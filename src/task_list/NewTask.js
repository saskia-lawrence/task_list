import React from "react";
function NewTask({
  newTaskName,
  setNewTaskName,
  newTaskDesc,
  setNewTaskDesc,
  eventHandler,
}) {
  return (
    <form onSubmit={eventHandler}>
      <input
        value={newTaskName}
        onChange={({ target }) => setNewTaskName(target.value)}
        name="title"
        placeholder="New task"
      ></input>
      {newTaskName && (
        <textarea
          value={newTaskDesc}
          onChange={({ target }) => setNewTaskDesc(target.value)}
          name="description"
          placeholder="Details..."
        ></textarea>
      )}
      {newTaskName && <button type="submit">Add Task</button>}
    </form>
  );
}
export default NewTask;
