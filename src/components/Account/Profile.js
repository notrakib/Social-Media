import { useRef, useState } from "react";
import Card from "../Layout/Card";
import classes from "./Profile.module.css";

const Profile = () => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);

  const newName = useRef();
  const newEmail = useRef();
  const newPass = useRef();
  const confirmPass = useRef();

  const NameHandler = (event) => {
    event.preventDefault();
    setName(!name);
  };
  const EmailHandler = (event) => {
    event.preventDefault();
    setEmail(!email);
  };
  const PassHandler = (event) => {
    event.preventDefault();
    setPass(!pass);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (confirmPass.current.value !== "1234") {
      return;
    }
    console.log(
      newName.current.value,
      newEmail.current.value,
      newPass.current.value,
      confirmPass.current.value
    );
  };
  return (
    <Card>
      <form className={classes.profile}>
        <h1>Edit Profile</h1>
        <div>
          <h3>Name: </h3>
          {name === false && (
            <div>
              <h3>Ami</h3>
              <button onClick={NameHandler}>Edit</button>
            </div>
          )}
          {name === true && (
            <input ref={newName} placeholder="Enter new name"></input>
          )}
        </div>
        <div>
          <h3>Email: </h3>
          {email === false && (
            <div>
              <h3>Ami</h3>
              <button onClick={EmailHandler}>Edit</button>
            </div>
          )}
          {email === true && (
            <input ref={newEmail} placeholder="Enter new email"></input>
          )}
        </div>
        <div>
          <h3>Password: </h3>
          {pass === false && (
            <div>
              <h3>Ami</h3>
              <button onClick={PassHandler}>Edit</button>
            </div>
          )}
          {pass === true && (
            <input ref={newPass} placeholder="Enter new password"></input>
          )}
        </div>
        <div>
          <h3>Current Password: </h3>
          <input ref={confirmPass}></input>
        </div>
        <button onClick={SubmitHandler} id={classes.button}>
          Done
        </button>
      </form>
    </Card>
  );
};

export default Profile;
