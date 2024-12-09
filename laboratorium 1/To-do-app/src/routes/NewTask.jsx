import Modal from "../components/Modal";
import classes from "./NewTask.module.css";
import { useState } from "react";

function NewTask({ onCancel, onAddTask }) {
  const [enteredText, setEnteredText] = useState("");
  const [authorName, setAuthorName] = useState("");

  function bodyChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthorName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const taskData = {
      body: enteredText,
      author: authorName,
    };
    onAddTask(taskData);
    onCancel();
  }
// nazwa zadania
// opis zadania
// termin wykonania
// state (not done, done, expired)
// dificulty 1-10 gwiazdkami modyfikowalne tylko jak jest not done
// stan wszystkiego przetrzymywać w TaskAPP (właściwości lub kontek)
  return (
    <Modal onClose={onCancel}>
      <form onSubmit={submitHandler} className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>

        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>

        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewTask;
