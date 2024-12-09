import { useState } from 'react';
import "./App.css";
import Tasks from "../components/Tasks";
import NewTask from "./NewTask"; // Import NewTask component
import MainHeader from '../components/MainHeader';

function TasksApp() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(taskData) {
    setTasks((prevTasks) => [taskData, ...prevTasks]);
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
