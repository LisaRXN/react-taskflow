import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import type { ColumnType, Task } from "../../../type";

interface BoardProps {
  columns: ColumnType;
  deleteTask: (columnId: string, id: number) => void;
  moveTask: (
    sourceId: string,
    destId: string,
    sourceIndex: number,
    destIndex: number
  ) => void;
}

const Board = ({ columns, deleteTask, moveTask }: BoardProps) => {
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    moveTask(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col md:flex-row items-start justify-center gap-5  text-slate-900 w-full">
        {Object.values(columns).map((column) => (
          <div
            key={column.id}
            className="bg-white  rounded-lg shadow p-4 w-full md:w-80 flex flex-col gap-2"
          >
            <h2 className="text-xl font-semidbold font-rubik">
              {column.title}
            </h2>
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col gap-2"
                >
                  {/* drop card */}
                  {column.tasks.map((task: Task, index) => (
                    <Draggable
                      key={task.id.toString()}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-full gap-2 flex items-center justify-between bg-purple-100 rounded px-3 py-2 shadow cursor-pointer hover:bg-purple-200"
                        >
                          <p className="">{task.content}</p>
                          <button
                            aria-label="delete task"
                            type="button"
                            onClick={() => deleteTask(column.id, task.id)}
                            className="p-2"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
