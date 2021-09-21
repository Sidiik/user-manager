import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import ErrorText from "./ErrorText";
import styles from "./user.module.css";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [errorShow, setErrorShow] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [userErrorText, setUserErrorText] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 5 || userAge.trim().length === 0) {
      setUserErrorText("Username must be 5 chars long");
      setErrorText("Age must be profided");
      return;
    }
    if (+userAge < 7) {
      setErrorText("Age must be over 7 years old");
      return;
    }
    setErrorText("");
    setUserErrorText("");
    props.onAddUser(username, userAge);
    setUsername("");
    setUserAge("");
  };
  const usernameChangeHanlder = (e) => {
    setUsername(e.target.value);

    setUserErrorText("");
  };
  const usernameAgeHandler = (e) => {
    setUserAge(e.target.value);
    setErrorText("");
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
              value={username}
              onChange={usernameChangeHanlder}
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
              value={userAge}
              onChange={usernameAgeHandler}
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
