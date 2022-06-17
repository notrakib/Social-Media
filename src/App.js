import classes from "./App.module.css";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import RecentPost from "./components/post/RecentPost";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

function App() {
  return (
    <div className={classes.div}>
      <Navbar></Navbar>
      <FrontPage></FrontPage>
      <RecentPost></RecentPost>
      <SignIn></SignIn>
      <Signup></Signup>
    </div>
  );
}

export default App;
