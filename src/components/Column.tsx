import type { ColumnContent, Task } from "../pages/Home";

interface ColumnProps {
  column: ColumnContent;
  deleteTask: (columnId: string, id:number) => void
}

const Column = ({ column, deleteTask}: ColumnProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-80 flex flex-col gap-2">
      <h2 className="text-xl font-semidbold">{column.title}</h2>

      <div className="flex flex-col gap-2">
        {column.tasks.map((task: Task) => (
          <div className="w-full gap-2 flex items-center justify-between bg-blue-100 rounded p-3 shadow cursor-pointer hover:bg-blue-200">
            <p
              key={task.id}
              className=""
            >
              {task.content}
            </p>
            <button
             onClick={()=> deleteTask(column.id, task.id)}
             className="p-2">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
