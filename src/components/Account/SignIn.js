import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinAction } from "../Store/Signin-slice";
import Card from "../Layout/Card";
import classes from "./SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const dispatch = useDispatch();
  const allProfile = useSelector((state) => state.profile.profileArray);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const signedProfile = allProfile.find(
      (item) => item.email === emailRef.current.value
    );

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMGuiH_2rYlDTddzTf2sD-twnmsMP_H4U",
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
        const data = await response.json();
        const profile = {
          signin: true,
          userId: signedProfile.userId,
          idToken: data.idToken,
          expiresIn: data.expiresIn,
          emailId: emailRef.current.value,
          name: signedProfile.name,
        };

        if (signedProfile === undefined) return;
        dispatch(signinAction.login(profile));

        console.log(profile);
        navigate("/NewsFeed");
      } else {
        const data = await response.json();
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card>
      <form className={classes.signin}>
        <h1>
          Sign in \ <Link to="/Signup">Create An Account</Link>
        </h1>
        <div>
          <h3>User ID</h3>
          <input ref={emailRef} id={classes.user} type="email"></input>
        </div>
        <div>
          <h3>Password</h3>
          <input ref={passRef} type="password"></input>
        </div>
        <button onClick={submitHandler}>Sign in</button>
      </form>
    </Card>
  );
};

export default SignIn;
