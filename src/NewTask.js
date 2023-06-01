import React from "react";
import "./styles.css";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="title"
        placeholder="what are we doing today?"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            className="textarea"
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit" className="form button">
            Add Task
          </button>
        </>
      )}
    </form>
  );
}
