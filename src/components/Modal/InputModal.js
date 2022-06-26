import { Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import Card from "../Layout/Card";
import styles from "./InputModal.module.css";

const Underlay = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  const textref = useRef();

  const SubmitHandler = () => {
    props.onClick(textref.current.value);
  };

  return (
    <div className={styles.modal}>
      <Card>
        <div>
          <header>Write New Post</header>
          <textarea
            type="text"
            ref={textref}
            defaultValue={props.holder}
          ></textarea>
          <button onClick={SubmitHandler}>Done</button>
        </div>
      </Card>
    </div>
  );
};

const InputModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Underlay onClick={props.onClick}></Underlay>,
        document.getElementById("underlay_root")
      )}
      {ReactDOM.createPortal(
        <Overlay holder={props.holder} onClick={props.onClick}></Overlay>,
        document.getElementById("overlay_root")
      )}
    </Fragment>
  );
};

export default InputModal;
