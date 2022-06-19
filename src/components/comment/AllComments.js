import { Fragment } from "react";
import Posts from "../post/Posts";
import classes from "./AllComments.module.css";
import recent from "../post/RecentPost.module.css";
import PostDate from "../PostDate";

const AllComments = (props) => {
  return (
    <Fragment>
      <div className={recent.recentposts}>
        <Posts item={props.item}></Posts>
      </div>
      <div className={classes.cmntbox}>
        <h2>All Comments</h2>
        {props.item.comments.map((each) => (
          <div key={each.id}>
            <h3>{each.name}</h3>
            <p>{each.post}</p>
            <section>
              <PostDate postdate={each.date}></PostDate>
            </section>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AllComments;
