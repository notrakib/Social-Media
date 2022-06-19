import Card from "./Card";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <Card>
      <p className={classes.welcome}>Welcome</p>
    </Card>
  );
};

export default Welcome;
