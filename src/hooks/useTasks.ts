import { useCallback, useState } from "react";
import type { ColumnType } from "../../type";

export const useTasks = (initialColumns: ColumnType) => {
  const [columns, setColumns] = useState(initialColumns);

  const addTask = useCallback((content: string) => {
    const newTask = {
      id: Date.now(),
      content: content,
    };

    setColumns((prevColumns) => {
      const newTodoTasks = [newTask, ...prevColumns.todo.tasks];

      return {
        ...prevColumns,
        todo: {
          ...prevColumns.todo,
          tasks: newTodoTasks,
        },
      };
    });
  },[]);

  const deleteTask = useCallback ((columnId: string, taskId: number) => {
    setColumns((prevColumns) => {
      const updatedTasks = prevColumns[columnId].tasks.filter(
        (task) => task.id !== taskId
      );

      return {
        ...prevColumns, //copie toutes les colonnes
        [columnId]: {
          //notation dynamique de clef: on utilise la clef existante 'columnId'
          ...prevColumns[columnId], //copie toute la colonne
          tasks: updatedTasks, //écrase les tasks
        },
      };
    });
  }, []);

  const moveTask = useCallback ( (sourceId: string, destId:string, sourceIndex: number, destIndex:number ) => {

    const sourceCol = columns[sourceId];
    const destCol = columns[destId];

    const sourceTasks = [...sourceCol.tasks];
    const [movedTask] = sourceTasks.splice(sourceIndex, 1);

    // Si déplacement dans même colonne: on modifie l'ordre des tasks
    if (sourceCol === destCol) {
      sourceTasks.splice(destIndex, 0, movedTask);

      setColumns({
        ...columns,
        [sourceId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
      });
    }
    // Si déplacement dans autre colonne
    else {
      const destTasks = [...destCol.tasks];
      destTasks.splice(destIndex, 0, movedTask);

      setColumns({
        ...columns,
        [sourceId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
        [destId]: {
          ...destCol,
          tasks: destTasks,
        },
      });
    }
  }, [columns]); //car columns vient de l'extérieur

  return {
    columns,
    setColumns,
    addTask,
    deleteTask,
    moveTask
  }

};
