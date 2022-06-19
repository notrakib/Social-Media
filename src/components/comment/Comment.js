import classes from "./Comment.module.css";

const Comment = () => {
  return (
    <form className={classes.cmnt}>
      <input placeholder="Kisu Bole Zan"></input>
      <button>Send</button>
    </form>
  );
};

export default Comment;