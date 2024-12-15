import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectsSelected from "./components/NoProjectsSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/selectedProject.jsx";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  //undefined =>nothing is taking place,null=>adding

  function handleAddTasks(task) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        task,
        projectId: prevState.selectedProjectId,
        taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = { ...projectData, id: Math.random() };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id != prevState.selectedProjectId
        ),
      };
    });
  }

  console.log(projectState.projects);
  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const project = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = (
      <SelectedProject
        project={project}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTasks}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
        projectId={projectState.selectedProjectId}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        selectProject={handleSelectProject}
        projectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
