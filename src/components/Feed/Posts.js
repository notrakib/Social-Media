import classes from "./Posts.module.css";
import PostDate from "../Date/PostDate";
import DaysAgo from "../Date/DaysAgo";
import Comment from "../comment/Comment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { upvoteAction } from "../Store/Upvote-slice";
import { postAction } from "../Store/NewPost-slice";
import { shareAction } from "../Store/Share-slice";

const Posts = (props) => {
  const navigate = useNavigate();
  const comment = useSelector((state) => state.comment.commentArray);
  const upvote = useSelector((state) => state.upvote.upvoteArray);
  const share = useSelector((state) => state.share.shareArray);
  const signedprofile = useSelector((state) => state.signin);
  const post = useSelector((state) => state.post.newPostArray);
  const dispatch = useDispatch();

  if (props.item === undefined) return;

  const numberofUpvotes = upvote.filter(
    (post) => post.postId === props.item.postId
  );

  const numberofShares = share.filter(
    (post) => post.postId === props.item.postId
  );

  const numberofComments = comment.filter(
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

    const targetedPost = post.find(
      (thePost) => thePost.postId === props.item.postId
    );

    const targetPost = share.find(
      (post) =>
        post.postId === props.item.postId &&
        post.userId === signedprofile.userId
    );

    if (targetPost !== undefined) return;

    const newShare = {
      postId: props.item.postId,
      userId: signedprofile.userId,
      name: signedprofile.name,
    };

    const newPost = {
      userId: targetedPost.userId,
      name: targetedPost.name,
      postId: Math.random().toString(),
      post: targetedPost.post,
      date: targetedPost.date,
      share: signedprofile.name,
    };

    dispatch(postAction.createPost(newPost));
    dispatch(shareAction.createShare(newShare));
  };

  let shareby = "";

  if (props.item.share) {
    shareby = <p>shared by {props.item.share}</p>;
  }

  return (
    <div className={classes.posts}>
      <h1>{props.item.name}</h1>
      {shareby}
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
