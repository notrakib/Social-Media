import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../Layout/Card";
import styles from "./ErrorModal.module.css";

const Underlay = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <Card>
        <div>
          <header>An Error Occured</header>
          <p>{props.errorMessage}</p>
          <button onClick={props.onClick}>Understood</button>
        </div>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Underlay onClick={props.onClick}></Underlay>,
        document.getElementById("underlay_root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          errorMessage={props.errorMessage}
          onClick={props.onClick}
        ></Overlay>,
        document.getElementById("overlay_root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
