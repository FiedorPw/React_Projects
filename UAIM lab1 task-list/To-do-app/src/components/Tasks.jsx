import Task from "./Task";
import classes from "./Tasks.module.css";

function Tasks({ tasks }) {
  return (
    <div className={classes.Tasks}>
      {tasks.length > 0 ? (
        <ul className={classes.tasks}>
          {tasks.map((task) => (
            <Task
                         key={task.id}  // Use task.id instead of index for key
                         id={task.id}
                         title={task.title}
                         details={task.details}
                         dueDate={task.dueDate}
                         status={task.status}
                         difficulty={task.difficulty}
                       />
          ))}
        </ul>
      ) : (
        <p>Brak zadań.</p>
      )}
    </div>
  );
}

export default Tasks;
