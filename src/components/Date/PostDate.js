import classes from "./PostDate.module.css";

const PostDate = (props) => {
  const day = props.postdate.getDate();
  const month = props.postdate.getMonth();
  const year = props.postdate.getFullYear();

  return (
    <section className={classes.date}>
      Posted on {day}-{month}-{year}
    </section>
  );
};

export default PostDate;
