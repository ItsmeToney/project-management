import Button from "./Button";
export default function ProjectsDefault({
  onStartAddProject,
  projects,
  selectProject,
  projectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 my-1  hover:text-stone-200 hover:bg-stone-800 rounded-sm ";

          if (project.id === projectId) {
            cssClass += "bg-stone-800 text-stone-200";
          } else {
            cssClass += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => selectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
