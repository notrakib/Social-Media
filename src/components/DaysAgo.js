import classes from "./DaysAgo.module.css";

const DaysAgo = (props) => {
  const today = new Date().getTime();
  const thatday = props.postdate.getTime();

  const diffdays = ((today - thatday) / (1000 * 60 * 60 * 24)).toFixed(0);

  return <p className={classes.date}>{diffdays} days ago</p>;
};

export default DaysAgo;
