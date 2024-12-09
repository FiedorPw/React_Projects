import { useContext, useState } from 'react';
import "./App.css";
import Tasks from "../components/Tasks";
import NewTask from "./NewTask";
import MainHeader from '../components/MainHeader';
import { TaskContext } from '../context/TaskContext';

function TasksApp() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Destructure object returned from context
  const { tasks, addTask } = useContext(TaskContext);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(taskData) {
    addTask(taskData);
  }

  return (
    <>
      <MainHeader onCreateTask={showModalHandler} />
      <Tasks tasks={tasks} />
      {modalIsVisible && (
        <NewTask onCancel={hideModalHandler} onAddTask={addTaskHandler} />
      )}
    </>
  );
}

export default TasksApp;
