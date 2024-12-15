import NewTask from "./NewTask.jsx";
export default function Tasks({ onAddTask, onDeleteTask, tasks, projectId }) {
  const resultTask = tasks.filter((task) => task.projectId === projectId);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />{" "}
      {resultTask.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet..
        </p>
      )}
      {resultTask.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {resultTask.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4 ">
              <span>{task.task}</span>
              <button
                className="text-stone-800 hover:text-red-500"
                onClick={() => onDeleteTask(task.taskId)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
