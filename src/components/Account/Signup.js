import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../Layout/Card";
import classes from "./Signup.module.css";

import { profileAction } from "../Store/NewProfile-slice";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const profile = {
      userId: Math.random().toString(),
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    dispatch(profileAction.createProfile(profile));
    navigate("*");

    // try {
    //   const response = await fetch(
    //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMGuiH_2rYlDTddzTf2sD-twnmsMP_H4U",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email: emailRef.current.value,
    //         password: passRef.current.value,
    //         returnSecureToken: true,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log(data.idToken, data.expiresIn);
    //     navigate("*");
    //   } else {
    //     const data = await response.json();
    //     throw new Error(data.error.message);
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
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
  );
};

export default Signup;
