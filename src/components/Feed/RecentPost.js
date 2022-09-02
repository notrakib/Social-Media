import classes from "./RecentPost.module.css";
import Card from "../Layout/Card";
import Posts from "./Posts";
import { useSelector } from "react-redux";

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
  } catch (error) {}

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
