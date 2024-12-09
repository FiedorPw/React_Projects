import classes from "./Task.module.css";

function Task({ task }) {
  const {updateTask, deleteTask} = useContext(TaskContext);

  const toggleStatus = () => {
    const updatedTask = { ...task, status: task.status === "done" ? 'not done': 'done' };
    updateTask(updatedTask);
  }

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={classes.task}>
      <h3>{task.title}</h3>
      <p>{task.details}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <StarRating rating={task.difficulty} onRate={(rating) => updateTask({ ...task, difficulty: rating })} />
      <button onClick={toggleStatus}>{task.status === 'done' ? 'Mark as Not Done' : 'Mark as Done'}</button>
      {(task.status === 'done' || task.status === 'expired') && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}

export default Task;
