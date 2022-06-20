import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import FrontPage from "./components/Feed/FrontPage";
import Navbar from "./components/Layout/Navbar";
import RecentPost from "./components/Feed/RecentPost";
import Profile from "./components/Account/Profile";
import SignIn from "./components/Account/SignIn";
import Signup from "./components/Account/Signup";
import Welcome from "./components/Layout/Welcome";
import { useSelector } from "react-redux";

function App() {
  const signin = useSelector((state) => state.signin.signin);

  return (
    <div className={classes.div}>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Welcome />} path="*" />
        {signin && (
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
          </Fragment>
        )}
        {!signin && (
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
