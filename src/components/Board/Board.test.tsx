import React from "react";
import Board from "./Board";
import { fireEvent, render, screen } from "@testing-library/react";

test("delete task", () => {
  const columns = {
    todo: {
      id: "todo",
      title: "To do",
      tasks: [{id:1, content:"Learn Jest"}],
    },
    inProgress: {
      id: "inProgress",
      title: "In progress",
      tasks: [],
    },
    done: {
      id: "done",
      title: "Done",
      tasks: [],
    },
  };


  const mockDeleteTask = jest.fn();
  const mockMoveTask = jest.fn();

  render(
    <Board
      columns={columns}
      deleteTask={mockDeleteTask}
      moveTask={mockMoveTask}
    />
  );

  const button = screen.getByRole("button", { name:"delete task" });

  fireEvent.click(button);

  expect(mockDeleteTask).toHaveBeenCalledWith('todo', 1);

});
