import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentAction } from "../Store/Comment-slice";
import classes from "./Comment.module.css";

const Comment = (props) => {
  const commentRef = useRef();
  const signedProfile = useSelector((state) => state.signin);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const date = String(new Date());

    const comment = {
      name: signedProfile.name,
      userId: signedProfile.userId,
      postId: props.id,
      commentId: Math.random().toString(),
      comment: commentRef.current.value,
      date: date,
    };
    dispatch(commentAction.createComment(comment));
  };
  return (
    <form className={classes.cmnt}>
      <input ref={commentRef} placeholder="Kisu Bole Zan"></input>
      <button onClick={submitHandler}>Send</button>
    </form>
  );
};

export default Comment;
