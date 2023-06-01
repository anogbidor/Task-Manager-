import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TaskList";

export default function App() {
  const [newTask, setNewTask] = useState({});

  //This handleChange function is called when the user types into the form input field.
  //It receives an event object and destructures the target property from it, which is the input element that triggered the event.
  //It then extracts the name and value properties from the input element and updates the newTask state variable using the setNewTask function.
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  //The handleDelete function is called when the user clicks the delete button for a specific task.
  //It receives the id of the task to be deleted
  //updates the allTasks state variable by removing the task with the matching id using the filter method.

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  //The AppFunction component returns a JSX template that renders the NewTask component and the TasksList component.
  //The NewTask component receives the newTask object, the handleChange function, and the handleSubmit function as props.
  //The TasksList component receives the allTasks array and the handleDelete function as props.
  return (
    <main className="#app">
      <h1>Task Manager</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
