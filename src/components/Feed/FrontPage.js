import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../Store/NewPost-slice";
import Card from "../Layout/Card";
import classes from "./FrontPage.module.css";

const FrontPage = () => {
  const postRef = useRef();
  const dispatch = useDispatch();
  const signedprofile = useSelector((state) => state.signin);

  const submitHandler = () => {
    if (postRef.current.value === "") return;

    const date = String(new Date());

    const newPost = {
      userId: signedprofile.userId,
      name: signedprofile.name,
      postId: Math.random().toString(),
      post: postRef.current.value,
      date: date,
      share: null,
    };

    dispatch(postAction.createPost(newPost));
    postRef.current.value = "";
  };

  return (
    <Fragment>
      <Card>
        <div className={classes.div}>
          <textarea ref={postRef}></textarea>
          <button onClick={submitHandler}>POST</button>
        </div>
      </Card>
    </Fragment>
  );
};

export default FrontPage;
