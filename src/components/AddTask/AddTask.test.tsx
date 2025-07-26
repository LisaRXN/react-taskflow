import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";
import React from "react";  

//Définir un premier test :

test("add a task when submit form", () => {

  //On crée une fonction factice (mock) avec Jest qui remplace addTask
  const mockAddTask = jest.fn();

  //On affiche (render) le composant AddTask dans un DOM virtuel pour pouvoir interagir avec lui.
  render(<AddTask addTask={mockAddTask} />);

  //On cherche dans le DOM virtuel un élément <input> ayant un attribut placeholder correspondant au texte "add a task" (insensible à la casse grâce au /i).
  const input = screen.getByPlaceholderText(/add a task/i);
  //On cherche dans le DOM un bouton (role="button") dont le texte (accessible name) correspond à "add" (insensible à la casse).
  const button = screen.getByRole("button", { name: /add/i });

  //On simule un changement dans l’input : l’utilisateur tape le texte "My test task".
  fireEvent.change(input, { target: { value: "My test task" } });

  //On simule un clic sur le bouton.
  fireEvent.click(button);

  //On vérifie que la fonction mock mockAddTask a bien été appelée une fois avec l’argument "My test task".
  expect(mockAddTask).toHaveBeenCalledWith("My test task");
});
