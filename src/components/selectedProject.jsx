import Tasks from "./Tasks.jsx";
export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
  projectId,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(formattedDate);
  return (
    <div className="w-[35rem] mt-16">
      <header className="mb-4 pb-4 border-b-4 border-stone-400 rounded ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-4 text-stone-600">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
        projectId={projectId}
      />
    </div>
  );
}
