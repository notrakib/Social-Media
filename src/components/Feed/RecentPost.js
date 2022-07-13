import classes from "./RecentPost.module.css";
import React, { Fragment, useState } from "react";
import Card from "../Layout/Card";
import Posts from "./Posts";
import { useSelector } from "react-redux";
import ErrorModal from "../Modal/ErrorModal";

const RecentPost = () => {
  const [errormsg, setmsg] = useState("");
  const allPosts = useSelector((state) => state.post.newPostArray);
  const userId = useSelector((state) => state.signin.userId);
  const friendlist = useSelector((state) => state.friends.friendArray);

  const newsfeed = [];

  try {
    const targettedUser = friendlist.find((user) => user.userId === userId);

    if (targettedUser !== undefined || targettedUser.friends !== undefined) {
      targettedUser.friends.map((friend) => {
        allPosts.map((post) => {
          if (post.userId === friend) {
            newsfeed.push(post);
          }
        });
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  const ModalHandler = (event) => {
    event.preventDefault();
    setmsg("");
  };
  return (
    <Fragment>
      <Card>
        <div className={classes.recentposts}>
          {newsfeed.map((item) => (
            <Posts key={item.postId} item={item}></Posts>
          ))}
        </div>
      </Card>
      {errormsg !== "" && (
        <ErrorModal errorMessage={errormsg} onClick={ModalHandler}></ErrorModal>
      )}
    </Fragment>
  );
};

export default RecentPost;
