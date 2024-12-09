import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import Task from './Task';
import classes from './Tasks.module.css';

function Tasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className={classes.Tasks}>
      {tasks.length > 0 ? (
        <ul className={classes.tasks}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default Tasks;
