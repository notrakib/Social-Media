import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import FrontPage from "./components/Feed/FrontPage";
import Navbar from "./components/Layout/Navbar";
import RecentPost from "./components/Feed/RecentPost";
import Profile from "./components/Account/Profile";
import SignIn from "./components/Account/SignIn";
import Signup from "./components/Account/Signup";
import Welcome from "./components/Layout/Welcome";
import { useDispatch, useSelector } from "react-redux";
import Post_Comments from "./components/comment/Post_Comments";
import { FetchData, SendData } from "./components/Store/NewProfile-slice";

const x = true;

function App() {
  const signin = useSelector((state) => state.signin);
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    if (x) {
      dispatch(FetchData());
      return;
    }
    dispatch(SendData(profile));
  }, [profile]);

  return (
    <div className={classes.div}>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Welcome />} path="*" />
        {signin.signin && (
          <Fragment>
            <Route
              element={
                <Fragment>
                  <FrontPage /> <RecentPost />
                </Fragment>
              }
              path="/FrontPage"
            />
            <Route element={<Profile />} path="/Profile" />
            <Route element={<Post_Comments />} path="/:postId" />
          </Fragment>
        )}
        {!signin.signin && (
          <Fragment>
            <Route element={<Signup />} path="/Signup" />
            <Route element={<SignIn />} path="/SignIn" />
          </Fragment>
        )}
      </Routes>
    </div>
  );
}

export default App;
