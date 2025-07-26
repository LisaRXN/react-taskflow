import { useEffect, useState } from "react";
import AddTask from "../components/AddTask/AddTask";
import Board from "../components/Board/Board";
import type { ColumnType } from "../../type";
import { useTasks } from "../hooks/useTasks";

const Home = () => {
  const [initialColumns] = useState<ColumnType>(() => {
    const storedColumns = localStorage.getItem("columns");
    if (storedColumns) {
      return JSON.parse(storedColumns);
    }

    return {
      todo: {
        id: "todo",
        title: "To do",
        tasks: [],
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
  });

  const { addTask, deleteTask, moveTask, columns } = useTasks(initialColumns);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-start p-5 md:p-10 lg:p-20 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900 ">
      <div className="flex flex-col gap-5 items-center justify-center text-white">
        <h1 className="text-3xl  font-bold font-rubik">Welcome to Taskflow</h1>
        <p className="font-rubik ">
          Let’s get things done – one drag at a time! ✨
        </p>
      </div>
      <AddTask addTask={addTask} />
      <Board
        columns={columns}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />
    </div>
  );
};

export default Home;
