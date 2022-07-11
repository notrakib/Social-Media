import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../Layout/Card";
import classes from "../Account/AddFriend.module.css";

const AddFriend = () => {
  const profile = useSelector((state) => state.profile.profileArray);
  const friends = useSelector((state) => state.friends.friendArray);
  const userId = useSelector((state) => state.signin.userId);

  if (friends === undefined) return;

  // const addFriends = profile.filter(
  //   (each) =>
  //     each.userId !== userId &&
  //     each.friends.filter((friend) => friend.friends.userId !== each.userId)
  // );

  return (
    <Fragment>
      <Card>
        <h2>Pending Requests</h2>
      </Card>
      <Card>
        <h2>Send Requests</h2>
        {profile.map((each) => {
          return (
            <div key={each.userId} className={classes.Addfrend}>
              <h3>{each.name}</h3>
              <button>Add Friend</button>
            </div>
          );
        })}
      </Card>
    </Fragment>
  );
};

export default AddFriend;
