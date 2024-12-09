import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <ul>
        <li className={classes.text}> {props.text}</li>
        <li className={classes.author}>Autor: {props.headline}</li>
      </ul>
    </div>
  );
}

export default Post;
