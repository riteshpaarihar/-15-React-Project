import Heading from "./components/Heading";
import Container from "./components/Container";
import TaskList from "./components/TaskList";
import InputTask from "./InputTask";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  const addNewTask = (newTask) => {
    setTask([...task, newTask]);
  };

  const handleDeleteTask = (index) =>{
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  }

  const handleUpdateTask = (index) =>{
    const updatedTask = window.prompt('Update task:', task[index]);
    if (updatedTask !== null && updatedTask.trim() !== '') {
      const newTasks = [...task];
      newTasks[index] = updatedTask;
      setTask(newTasks);
    }
  }
  return (
    <>
      <Container>
        <div className="w-[80%] bg-[#1E1E1E] mx-auto  min-h-60 p-2">
          <div className=" flex items-center justify-center text-3xl text-white font-semibold flex-col">
            <Heading task={task} />

            <InputTask addNewTask={addNewTask} />
            <div className="max-h-80 min-h-60 overflow-y-auto w-[80%]">
              {task.map((task, index) => {
                return <TaskList task={task} key={index} index={index} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
