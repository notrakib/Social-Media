import Card from "./Card";
import classes from "./SignIn.module.css";

const SignIn = () => {
  const clickHandler = () => {};

  return (
    <Card>
      <form className={classes.signin}>
        <h1>Sign in</h1>
        <div>
          <h3>User ID</h3>
          <input id={classes.user} type="text"></input>
        </div>
        <div>
          <h3>Password</h3>
          <input type="password"></input>
        </div>
        <button onClick={clickHandler}>Sign in</button>
      </form>
    </Card>
  );
};

export default SignIn;
