import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Layout/Card";
import AddFriend from "./AddFriend";
import { friendsAction } from "../Store/Friends-slice";

const Friends = () => {
  let profile = useSelector((state) => state.profile.profileArray);
  const friendlist = useSelector((state) => state.friends.friendArray);
  const userId = useSelector((state) => state.signin.userId);
  const dispatch = useDispatch();
  const availableFriends = [];

  profile = profile.filter((each) => each.userId !== userId);

  try {
    const targettedUser = friendlist.find((user) => user.userId === userId);

    profile.map((each) => {
      if (
        targettedUser.friends.find((friend) => friend === each.userId) ===
        undefined
      ) {
        availableFriends.push({ userId: each.userId, name: each.name });
      }
    });
  } catch (error) {
    console.log(error);
  }

  const AddFriendHandler = (userid) => {
    dispatch(friendsAction.updateFriends({ userId: userId, friends: userid }));
  };

  return (
    <Fragment>
      <Card>
        <h2>Pending Requests</h2>
      </Card>
      <Card>
        <h2>Send Requests</h2>
        {availableFriends.map((each) => {
          return (
            <AddFriend
              key={each.userId}
              onConfirm={AddFriendHandler}
              each={each}
            ></AddFriend>
          );
        })}
      </Card>
    </Fragment>
  );
};

export default Friends;
