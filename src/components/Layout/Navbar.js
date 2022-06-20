import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signinAction } from "../Store/Signin-slice";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const signin = useSelector((state) => state.signin);
  const dispatch = useDispatch();

  const signoutHandler = (event) => {
    event.preventDefault();

    dispatch(signinAction.logout());
  };

  return (
    <ul className={classes.nav}>
      {signin.signin && (
        <Fragment>
          <li>
            <NavLink
              to="/FrontPage"
              className={(navdata) =>
                navdata.isActive ? classes.isActive : ""
              }
            >
              News Feed
            </NavLink>
          </li>
          <li>
            <NavLink
              to="*"
              className={(navdata) =>
                navdata.isActive ? classes.isActive : ""
              }
            >
              Notification
            </NavLink>
          </li>
          <li>
            <NavLink
              to="*"
              className={(navdata) =>
                navdata.isActive ? classes.isActive : ""
              }
            >
              Messages
            </NavLink>
          </li>
        </Fragment>
      )}
      {!signin.signin && (
        <li>
          <NavLink
            to="*"
            className={(navdata) => (navdata.isActive ? classes.isActive : "")}
          >
            Welcome to Moti Media
          </NavLink>
        </li>
      )}
      <div id={classes.right}>
        {signin.signin && (
          <Fragment>
            <li>
              <NavLink
                to="/Profile"
                className={(navdata) =>
                  navdata.isActive ? classes.isActive : ""
                }
              >
                {signin.name}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={signoutHandler} to="/SignIn">
                Sign out
              </NavLink>
            </li>
          </Fragment>
        )}
        {!signin.signin && (
          <li>
            <NavLink
              to="/Signin"
              className={(navdata) =>
                navdata.isActive ? classes.isActive : ""
              }
            >
              Sign in
            </NavLink>
          </li>
        )}
      </div>
    </ul>
  );
};

export default Navbar;
