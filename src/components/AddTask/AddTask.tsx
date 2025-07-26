import { useState } from "react";
import React from "react";  

interface AddTaskProps {
  addTask: (content: string) => void;
}

const AddTask = ({ addTask }: AddTaskProps) => {
  
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      return;
    }
    addTask(content);
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center justify-center w-full"
    >
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 p-2 border rounded w-full lg:max-w-96"
        placeholder="Add a task..."
      ></input>
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
