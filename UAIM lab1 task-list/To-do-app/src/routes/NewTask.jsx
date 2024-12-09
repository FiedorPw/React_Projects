import Modal from "../components/Modal";
import classes from "./NewTask.module.css";
import { useState } from "react";
import { FaStar, FaRegStar } from 'react-icons/fa';

function NewTask({ onCancel, onAddTask }) {
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [difficulty, setDifficulty] = useState(5);

  function detailsChangeHandler(event) {
    setDetails(event.target.value);
  }

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function dueDateChangeHandler(event) {
    setDueDate(event.target.value);
  }

  function difficultyChangeHandler(value) {
    setDifficulty(value);
  }

  // Generate stars for difficulty selection
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => difficultyChangeHandler(i)}
          style={{ cursor: 'pointer' }}
        >
          {i <= difficulty ? (
            <FaStar className={classes.starFilled} />
          ) : (
            <FaRegStar className={classes.starEmpty} />
          )}
        </span>
      );
    }
    return stars;
  };

  function submitHandler(event) {
    event.preventDefault();

    const taskData = {
      title: title,
      details: details,
      dueDate: dueDate,
      status: 'oczekujące',
      difficulty: difficulty,
    };

    onAddTask(taskData);
    onCancel();
  }

  return (
    <Modal onClose={onCancel}>
      <form onSubmit={submitHandler} className={classes.form}>
        <p>
          <label htmlFor="title">Tytuł</label>
          <input
            type="text"
            id="title"
            required
            onChange={titleChangeHandler}
          />
        </p>

        <p>
          <label htmlFor="details">Detale zadania:</label>
          <textarea
            id="details"
            required
            rows={3}
            onChange={detailsChangeHandler}
          />
        </p>

        <p>
          <label htmlFor="dueDate">Termin wykonania:</label>
          <input
            type="date"
            id="dueDate"
            required
            onChange={dueDateChangeHandler}
          />
        </p>

        <p>
          <label>Poziom trudności:</label>
          <div className={classes.stars}>
            {renderStars()}
          </div>
        </p>

        <p className={classes.actions}>
          <button type="submit" className={classes.addBtn}>Dodaj</button>
          <button type="button"  className={classes.discardBtn} onClick={onCancel}>
            Anuluj
          </button>
        </p>
      </form>
    </Modal>
  );
}

export default NewTask;
