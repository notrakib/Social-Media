import classes from "./Posts.module.css";
import PostDate from "../Date/PostDate";
import DaysAgo from "../Date/DaysAgo";
import Comment from "../comment/Comment";

const Posts = (props) => {
  const clickHnadler = () => {};

  return (
    <div className={classes.posts}>
      <h1>{props.item.name}</h1>
      <DaysAgo postdate={props.item.date}></DaysAgo>
      <p>{props.item.post}</p>
      <h4 className={classes.postDate}>
        <PostDate postdate={props.item.date}></PostDate>
      </h4>
      <section>
        <button onClick={clickHnadler}>{props.item.upvote} Upvotes</button>
        <button>{props.item.comments.length} Comments</button>
        <button>{props.item.shares} Shares</button>
      </section>
      <Comment></Comment>
    </div>
  );
};

export default Posts;
