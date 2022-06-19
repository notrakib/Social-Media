import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import RecentPost from "./components/post/RecentPost";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className={classes.div}>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Welcome />} path="*" />
        <Route
          element={
            <Fragment>
              <FrontPage /> <RecentPost />
            </Fragment>
          }
          path="/FrontPage"
        />
        <Route element={<Signup />} path="/Signup" />
        <Route element={<SignIn />} path="/SignIn" />
        <Route element={<Profile />} path="/Profile" />
      </Routes>
    </div>
  );
}

export default App;
