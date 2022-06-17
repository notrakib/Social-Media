import classes from "./Posts.module.css";
import PostDate from "../PostDate";
import DaysAgo from "../DaysAgo";
import Comment from "../comment/Comment";

const Posts = (props) => {
  const clickHnadler = () => {};

  return (
    <div className={classes.posts}>
      <h1>{props.item.name}</h1>
      <DaysAgo postdate={props.item.date}></DaysAgo>
      <p>{props.item.post}</p>
      <div id={classes.postDate}>
        <PostDate postdate={props.item.date}></PostDate>
      </div>
      <section>
        <button onClick={clickHnadler}>{props.item.upvote} Upvotes</button>
        <button>{props.item.comments} Comments</button>
        <button>{props.item.shares} Shares</button>
      </section>
      <Comment></Comment>
    </div>
  );
};

export default Posts;
