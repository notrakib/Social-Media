import classes from "./PostDate.module.css";

const PostDate = (props) => {
  const day = props.postdate.getDate();
  const month = props.postdate.getMonth();
  const year = props.postdate.getFullYear();

  return (
    <h4 className={classes.date}>
      Posted on {day}-{month}-{year}
    </h4>
  );
};

export default PostDate;
