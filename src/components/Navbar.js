import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const x = true;
  return (
    <ul className={classes.nav}>
      <li>
        <NavLink
          to="/FrontPage"
          className={(navdata) => (navdata.isActive ? classes.isActive : "")}
        >
          News Feed
        </NavLink>
      </li>
      <li>
        <NavLink
          to="*"
          className={(navdata) => (navdata.isActive ? classes.isActive : "")}
        >
          Notification
        </NavLink>
      </li>
      <li>
        <NavLink
          to="*"
          className={(navdata) => (navdata.isActive ? classes.isActive : "")}
        >
          Messages
        </NavLink>
      </li>
      <div id={classes.right}>
        <li>
          <NavLink
            to="/Signin"
            className={(navdata) => (navdata.isActive ? classes.isActive : "")}
          >
            Sign in
          </NavLink>
        </li>
        {!x && (
          <li>
            <NavLink to="*">Sign out</NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/Profile"
            className={(navdata) => (navdata.isActive ? classes.isActive : "")}
          >
            Profile
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
