import classes from "./RecentPost.module.css";
import Card from "../Layout/Card";
import Posts from "./Posts";
import { useSelector } from "react-redux";

const RecentPost = () => {
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
          return null;
        });
        return null;
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  return (
    <Card>
      <div className={classes.recentposts}>
        {newsfeed.map((item) => (
          <Posts key={item.postId} item={item}></Posts>
        ))}
      </div>
    </Card>
  );
};

export default RecentPost;
