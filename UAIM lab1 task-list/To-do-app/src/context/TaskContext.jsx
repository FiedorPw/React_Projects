import React, { createContext, useState, useEffect } from 'react';
import tasksFromFile from '../data/tasks.json';

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [lastId, setLastID] = useState(0);


  // Load tasks from a mock file or static data for demo purposes
  useEffect(() => {
    const initialTasks = tasksFromFile.tasks;
    setTasks(initialTasks);
    // Finding biggest ID for inicializatino of next tasks
    const maxId = Math.max(...initialTasks.map(task => task.id));
    setLastID(maxId);
  }, []);

  const addTask = (task) => {
      const newId = lastId + 1;
      setLastID(newId);
      setTasks((prev) => [{...task, id: newId}, ...prev]);
    };

  const removeTask = (taskId) => setTasks((prev) => prev.filter(task => task.id !== taskId));
  const updateTaskStatus = (taskId, newStatus) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  const updateTaskDifficulty = (taskId, newDifficulty) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, difficulty: newDifficulty } : task
      )
    );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        updateTaskStatus,
        updateTaskDifficulty,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
