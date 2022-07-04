import { Fragment } from "react";
import Posts from "../Feed/Posts";
import Card from "../Layout/Card";
import AllComments from "./AllComments";
import { useSelector } from "react-redux";
import classes from "../Feed/RecentPost.module.css";
import { useParams } from "react-router-dom";

const Post_Comments = () => {
  const comment = useSelector((state) => state.comment.commentArray);
  const post = useSelector((state) => state.post.newPostArray);
  const params = useParams();

  const targetedPost = post.find((post) => post.postId === params.postId);
  const allComments = comment.filter((cmnt) => cmnt.postId === params.postId);

  return (
    <Fragment>
      <Card>
        <div className={classes.recentposts}>
          <Posts item={targetedPost}></Posts>
        </div>
      </Card>
      <Card>
        <AllComments item={allComments}></AllComments>
      </Card>
    </Fragment>
  );
};

export default Post_Comments;
