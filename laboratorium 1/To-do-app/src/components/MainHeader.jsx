import { MdPostAdd } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader({ onCreateTask }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Lista Zadań</h1>
      <p>
        <button className={classes.button} onClick={onCreateTask}>
          <MdPostAdd size={18} />
          Nowe zadanie
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
