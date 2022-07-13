import { Fragment } from "react";
import classes from "../Account/AddFriend.module.css";

const AddFriend = (props) => {
  const SubmitHandler = () => {
    props.onConfirm(props.each.userId);
  };

  return (
    <Fragment>
      <div key={props.each.userId} className={classes.Addfrend}>
        <h3>{props.each.name}</h3>
        <button onClick={SubmitHandler}>Add Friend</button>
      </div>
    </Fragment>
  );
};

export default AddFriend;
