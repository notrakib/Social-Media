import Card from "../Layout/Card";
import classes from "./FrontPage.module.css";

const FrontPage = () => {
  return (
    <Card>
      <div className={classes.div}>
        <h2>Write New Post</h2>
        <textarea placeholder="Ki Vai Mone Ki Chole"></textarea>
        <button>POST</button>
      </div>
    </Card>
  );
};

export default FrontPage;
