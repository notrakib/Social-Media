import classes from "./RecentPost.module.css";
import React from "react";

import Card from "../Layout/Card";
import Posts from "./Posts";
import { useSelector } from "react-redux";

const RecentPost = () => {
  const allPosts = useSelector((state) => state.post.newPostArray);

  return (
    <Card>
      <div className={classes.recentposts}>
        {allPosts.map((item) => (
          <Posts key={item.postId} item={item}></Posts>
        ))}
      </div>
    </Card>
  );
};

export default RecentPost;
