import classes from "./Posts.module.css";
import PostDate from "../Date/PostDate";
import DaysAgo from "../Date/DaysAgo";
import Comment from "../comment/Comment";
import { useNavigate } from "react-router-dom";

const Posts = (props) => {
  const navigate = useNavigate();

  const upvoteHandler = (event) => {
    event.preventDefault();
  };
  const commentHandler = (event) => {
    event.preventDefault();
    // navigate(`/postId=${props.item.id}`);
    navigate("/" + props.item.postId);
  };
  const shareHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.posts}>
      <h1>{props.item.name}</h1>
      <DaysAgo postdate={props.item.date}></DaysAgo>
      <p>{props.item.post}</p>
      <h4 className={classes.postDate}>
        <PostDate postdate={props.item.date}></PostDate>
      </h4>
      <section>
        <button onClick={upvoteHandler}>{props.item.upvote} Upvotes</button>
        <button onClick={commentHandler}>{props.item.comment} Comments</button>
        <button onClick={shareHandler}>{props.item.shares} Shares</button>
      </section>
      <Comment id={props.item.postId}></Comment>
    </div>
  );
};

export default Posts;
