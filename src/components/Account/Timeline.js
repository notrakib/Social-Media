import classes from "../Feed/Posts.module.css";
import PostDate from "../Date/PostDate";
import DaysAgo from "../Date/DaysAgo";
import { useSelector } from "react-redux";
import Card from "../Layout/Card";

const Timeline = () => {
  const signedprofile = useSelector((state) => state.signin);
  const post = useSelector((state) => state.post.newPostArray);

  const allPosts = post.filter((post) => post.userId === signedprofile.userId);

  if (allPosts === undefined) return;

  return allPosts.map((post) => {
    return (
      <Card key={post.postId}>
        <div className={classes.posts}>
          <div>
            <h1>{post.name}</h1>
            <button>Delete</button>
          </div>

          <DaysAgo postdate={post.date}></DaysAgo>
          <p>{post.post}</p>
          <h4 className={classes.postDate}>
            <PostDate postdate={post.date}></PostDate>
          </h4>
        </div>
      </Card>
    );
  });
};

export default Timeline;
