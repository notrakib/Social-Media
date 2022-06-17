import Card from "./Card";
import classes from "./Signup.module.css";

const Signup = () => {
  const clickHandler = () => {};

  return (
    <Card>
      <form className={classes.signup}>
        <h1>Sign up</h1>
        <div>
          <h3>Name</h3>
          <input id={classes.name} type="text"></input>
        </div>
        <div>
          <h3>Email</h3>
          <input id={classes.email} type="text"></input>
        </div>
        <div>
          <h3>Password</h3>
          <input id={classes.pass} type="password"></input>
        </div>
        <div>
          <h3>Confirm Password</h3>
          <input id={classes.cpass} type="password"></input>
        </div>
        <button onClick={clickHandler}>Sign up</button>
      </form>
    </Card>
  );
};

export default Signup;
