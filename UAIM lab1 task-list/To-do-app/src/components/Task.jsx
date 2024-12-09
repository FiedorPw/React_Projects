import classes from "./Task.module.css";
import { FaStar, FaRegStar, FaTrash } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';

function Task({ id, title, details, dueDate, status, difficulty }) {
  const { updateTaskStatus, removeTask } = useContext(TaskContext);

  // Check if task is expired
  const isExpired = new Date(dueDate) < new Date() && status !== 'wykonane';

  // Update status to 'przeterminowane' if expired
  useEffect(() => {
    if (isExpired && status !== 'przeterminowane') {
      updateTaskStatus(id, 'przeterminowane');
    }
  }, [isExpired, id, status, updateTaskStatus]);

  // Convert dueDate to readable format
  const formattedDate = new Date(dueDate).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  // Handle status change
  const handleStatusChange = (e) => {
    const newStatus = e.target.checked ? 'wykonane' : 'oczekujące';
    updateTaskStatus(id, newStatus);
  };

  // Generate stars based on difficulty
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 10; i++) {
      stars.push(
        i < difficulty ?
          <FaStar key={i} className={classes.starFilled} /> :
          <FaRegStar key={i} className={classes.starEmpty} />
      );
    }
    return stars;
  };

  // Determine if task can be deleted
  const canDelete = status === 'wykonane' || status === 'przeterminowane';

  // Determine task status class
  const taskStatusClass = isExpired ? classes.przeterminowane : classes[status];

  return (
    <div className={`${classes.task} ${taskStatusClass}`}>
      <div className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        {canDelete && (
          <button
            onClick={() => removeTask(id)}
            className={classes.deleteButton}
            title="Usuń zadanie"
          >
            <FaTrash />
          </button>
        )}
      </div>

      <div className={classes.content}>
        <p className={classes.details}>{details}</p>

        <div className={classes.metadata}>
          <div className={classes.dateStatus}>
            <p className={isExpired ? classes.expiredDate : ''}>
              Termin: {formattedDate}
            </p>
            <div className={classes.statusContainer}>
              <label className={classes.statusLabel}>
                <input
                  type="checkbox"
                  checked={status === 'wykonane'}
                  onChange={handleStatusChange}
                  className={classes.checkbox}
                  disabled={status === 'przeterminowane'}
                />
                <span className={classes.statusText}>
                  Status: {status}
                </span>
              </label>
            </div>
          </div>

          <div className={classes.difficulty}>
            <span>Trudność: </span>
            <div className={classes.stars}>
              {renderStars()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
