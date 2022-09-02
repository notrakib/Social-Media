import classes from "./Timeline.module.css";
import Posts from "./Posts";
import { useSelector } from "react-redux";
import Card from "../Layout/Card";

const RecentPost = () => {
  const allPosts = useSelector((state) => state.post.newPostArray);
  const userId = useSelector((state) => state.signin.userId);
  const friendlist = useSelector((state) => state.friends.friendArray);

  const userPosts = allPosts.filter((post) => post.userId === userId);

  const newsfeed = [];

  try {
    const targettedUser = friendlist.find((user) => user.userId === userId);

    if (targettedUser !== undefined || targettedUser.friends !== undefined) {
      userPosts.map((post) => {
        if (post.userId === userId) {
          newsfeed.push(post);
        }
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
