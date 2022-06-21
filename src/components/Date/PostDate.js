import classes from "./PostDate.module.css";

const PostDate = (props) => {
  const day = new Date(props.postdate).getDate();
  const month = new Date(props.postdate).getMonth();
  const year = new Date(props.postdate).getFullYear();

  return (
    <section className={classes.date}>
      Posted on {day}-{month}-{year}
    </section>
  );
};

export default PostDate;
