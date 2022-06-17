import Card from "./Card";
import classes from "./FrontPage.module.css";

const FrontPage = () => {
  return (
    <Card>
      <div className={classes.div}>
        <h2>Write New Post</h2>
        <textarea></textarea>
        <button>POST</button>
      </div>
    </Card>
  );
};

export default FrontPage;
