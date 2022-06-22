import Card from "../Layout/Card";
import { Fragment } from "react";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <Fragment>
      <Card>
        <p className={classes.welcome}>
          A practice project to understand React better
        </p>
      </Card>
      <Card>
        <p className={classes.welcome}>
          What to do here:
          <br />
          1. Create an Account from Sign in <br /> 2. Sign in with email and
          password
          <br />
          3. Make a random post
          <br /> 4. Search for friends and add them <br />
          5. Make comments on other's post
        </p>
      </Card>
    </Fragment>
  );
};

export default Welcome;
