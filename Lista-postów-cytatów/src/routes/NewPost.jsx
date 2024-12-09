import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";


function NewPost({ onCancel, onAddPost }) {
  const [enteredText, setEnteredText] = useState("TEST");
  const [authorName, setAuthorName] = useState("");

  function bodyChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthorName(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      body: enteredText,
      author: authorName,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
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
          {/* react onChange */}
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

export default NewPost;
