import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import ErrorText from "./ErrorText";
import styles from "./user.module.css";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [errorShow, setErrorShow] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [userErrorText, setUserErrorText] = useState("");

  const addUserHandler = (e) => {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    e.preventDefault();
    if (enteredName.trim().length === 5 || enteredAge.trim().length === 0) {
      setUserErrorText("Username must be 5 chars long");
      setErrorText("Age must be profided");
      return;
    }
    if (+enteredAge < 7) {
      setErrorText("Age must be over 7 years old");
      return;
    }
    setErrorText("");
    setUserErrorText("");
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card>
      <div className={styles["new-user"]}>
        <form onSubmit={addUserHandler} className={styles.form}>
          <div className={styles["input-control"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete={"off"}
              placeholder="username"
              ref={nameInputRef}
            />
            {errorShow && <ErrorText text={userErrorText} color="red" />}
          </div>
          <div className={styles["input-control"]}>
            <label htmlFor="age">age</label>
            <input
              type="number"
              id="age"
              autoComplete={"off"}
              placeholder="Age"
              ref={ageInputRef}
            />
            {errorShow && <ErrorText text={errorText} color="red" />}
          </div>
          <Button type="sumbit">Add user</Button>
        </form>
      </div>
    </Card>
  );
}

export default AddUser;
