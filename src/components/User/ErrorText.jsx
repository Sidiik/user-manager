import React from "react";
import styles from "./Error.module.css";

function ErrorText(props) {
  return <p style={{ color: props.color }}>{props.text}</p>;
}

export default ErrorText;
