import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../Store/NewPost-slice";
import Card from "../Layout/Card";
import classes from "./FrontPage.module.css";

const FrontPage = () => {
  const postRef = useRef();
  const dispatch = useDispatch();
  const signedprofile = useSelector((state) => state.signin);

  const submitHandler = (event) => {
    event.preventDefault();

    const date = String(new Date());

    const newPost = {
      userId: signedprofile.userId,
      name: signedprofile.name,
      postId: Math.random().toString(),
      post: postRef.current.value,
      date: date,
    };

    dispatch(postAction.createPost(newPost));
  };

  return (
    <Card>
      <div className={classes.div}>
        <h2>Write New Post</h2>
        <textarea ref={postRef} placeholder="Ki Vai Mone Ki Chole"></textarea>
        <button onClick={submitHandler}>POST</button>
      </div>
    </Card>
  );
};

export default FrontPage;
