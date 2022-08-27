import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../Layout/Card";
import classes from "./Signup.module.css";

import { profileAction } from "../Store/NewProfile-slice";
import { friendsAction } from "../Store/Friends-slice";
import ErrorModal from "../Modal/ErrorModal";

const Signup = () => {
  const [errormsg, setmsg] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      if (passRef.current.value !== confirmPassRef.current.value)
        throw Error("Passwords do not match");
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMGuiH_2rYlDTddzTf2sD-twnmsMP_H4U",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        await response.json();

        const profile = {
          userId: Math.random().toString(),
          name: nameRef.current.value,
          email: emailRef.current.value,
        };

        dispatch(profileAction.createProfile(profile));
        dispatch(
          friendsAction.addFriends({
            userId: profile.userId,
            friends: [null],
          })
        );
        navigate("*");
      } else {
        const data = await response.json();
        throw new Error(data.error.message);
      }
    } catch (error) {
      setmsg(error.message);
    }
  };

  const ModalHandler = (event) => {
    event.preventDefault();
    setmsg("");
  };

  return (
    <Fragment>
      <Card>
        <form className={classes.signup}>
          <h1>
            Create an Account \ <Link to="/Signin">Sign in</Link>
          </h1>
          <div>
            <h3>Name</h3>
            <input ref={nameRef} id={classes.name} type="text"></input>
          </div>
          <div>
            <h3>Email</h3>
            <input ref={emailRef} id={classes.email} type="email"></input>
          </div>
          <div>
            <h3>Password</h3>
            <input ref={passRef} id={classes.pass} type="password"></input>
          </div>
          <div>
            <h3>Confirm Password</h3>
            <input
              ref={confirmPassRef}
              id={classes.cpass}
              type="password"
            ></input>
          </div>
          <button onClick={submitHandler}>Sign up</button>
        </form>
      </Card>
      {errormsg !== "" && (
        <ErrorModal errorMessage={errormsg} onClick={ModalHandler}></ErrorModal>
      )}
    </Fragment>
  );
};

export default Signup;
