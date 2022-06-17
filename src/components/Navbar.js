import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={classes.nav}>
      <li>
        <a href="www.google.com">New Post</a>
      </li>
      <li>
        <a href="www.google.com">Notification</a>
      </li>
      <li>
        <a href="www.google.com">Messages</a>
      </li>
      <div id={classes.right}>
        <li>
          <a href="www.google.com">Sign in</a>
        </li>
        <li>
          <a href="www.google.com">Profile</a>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
