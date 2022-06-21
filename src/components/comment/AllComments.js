import classes from "./AllComments.module.css";
import PostDate from "../Date/PostDate";

const AllComments = (props) => {
  return (
    <div className={classes.cmntbox}>
      <h2>All Comments</h2>
      {props.item.map((each) => (
        <div key={each.commentId}>
          <h3>{each.name}</h3>
          <p>{each.comment}</p>
          <section>
            <PostDate postdate={each.date}></PostDate>
          </section>
        </div>
      ))}
    </div>
  );
};

export default AllComments;
