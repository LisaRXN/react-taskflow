import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

beforeEach(() => {
    localStorage.setItem(
      "columns",
      JSON.stringify({
        todo: {
          id: "todo",
          title: "To do",
          tasks: [{ id: 1, content: "Learn Jest" }],
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
      })
    );
  });
  
  afterEach(() => {
    localStorage.clear();
  });



test("delete Task", () => {
  

  render(<Home />);

  //On vérifie que la tache est présente
  expect(screen.getByText("Learn Jest")).toBeInTheDocument();

  const deleteButton = screen.getByRole('button', {name:"delete task"});

  fireEvent.click(deleteButton);

  //queryByText et non getByText qui échoue si non trouvé
  expect(screen.queryByText("Learn Jest")).not.toBeInTheDocument();
  
});
