import "./App.css";
import { useState } from "react";
import TaskCard from "./task_list/TaskCard";
import NewTask from "./task_list/NewTask";

export default function Login() {
  let [taskList, setTaskList] = useState([]);
  let [newTaskName, setNewTaskName] = useState("");
  let [newTaskDesc, setNewTaskDesc] = useState("");
  function getComponents(s) {
    let a = [];
    for (let i = 0; i < s.length; i++) {
      let b = s[i];
      let c = <TaskCard taskName={b.key1} taskDesc={b.key2}></TaskCard>;
      a.push(c);
    }
    return a;
  }
  function eventHandler(event) {
    event.preventDefault();
    setNewTaskName("");
    setNewTaskDesc("");
    setTaskList((prev) => {
      prev.push({ key1: newTaskName, key2: newTaskDesc });
      return [...prev];
    });
  }
  let e = getComponents(taskList);
  return (
    <div>
      <h1>Task List</h1>
      <NewTask
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        newTaskDesc={newTaskDesc}
        setNewTaskDesc={setNewTaskDesc}
        eventHandler={eventHandler}
      ></NewTask>
      <ul>{e}</ul>
    </div>
  );
}
