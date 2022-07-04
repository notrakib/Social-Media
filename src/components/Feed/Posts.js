import classes from "./Posts.module.css";
import PostDate from "../Date/PostDate";
import DaysAgo from "../Date/DaysAgo";
import Comment from "../comment/Comment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { upvoteAction } from "../Store/Upvote-slice";
import { shareAction } from "../Store/Share-slice";

const Posts = (props) => {
  const navigate = useNavigate();
  const numberofComments = useSelector((state) => state.comment.commentArray);
  const upvote = useSelector((state) => state.upvote.upvoteArray);
  const share = useSelector((state) => state.share.shareArray);
  const signedprofile = useSelector((state) => state.signin);
  const dispatch = useDispatch();

  if (props.item === undefined) return;

  const numberofUpvotes = upvote.filter(
    (post) => post.postId === props.item.postId
  );

  const numberofShares = share.filter(
    (post) => post.postId === props.item.postId
  );

  const upvoteHandler = (event) => {
    event.preventDefault();
    const upvoteTracer = {
      postId: props.item.postId,
      userId: signedprofile.userId,
    };
    dispatch(upvoteAction.toggleUpvote(upvoteTracer));
  };

  const commentHandler = (event) => {
    event.preventDefault();
    navigate("/" + props.item.postId);
  };

  const shareHandler = (event) => {
    event.preventDefault();

    const newShare = {
      postId: props.item.postId,
      userId: signedprofile.userId,
      name: signedprofile.name,
    };
    dispatch(shareAction.createShare(newShare));
  };

  let shareby = "";

  if (props.item.sharedBy) {
    shareby = <p>shared by {props.item.sharedBy}</p>;
  }

  return (
    <div className={classes.posts}>
      <h1>
        {props.item.name} {shareby}
      </h1>
      <DaysAgo postdate={props.item.date}></DaysAgo>
      <p>{props.item.post}</p>
      <h4 className={classes.postDate}>
        <PostDate postdate={props.item.date}></PostDate>
      </h4>
      <section>
        <button onClick={upvoteHandler}>
          {numberofUpvotes.length} Upvotes
        </button>
        <button onClick={commentHandler}>
          {numberofComments.length} Comments
        </button>
        <button onClick={shareHandler}>{numberofShares.length} Shares</button>
      </section>
      <Comment id={props.item.postId}></Comment>
    </div>
  );
};

export default Posts;
