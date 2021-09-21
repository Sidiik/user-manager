import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import styles from "./user.module.css";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 7) {
      return;
    }
    props.onAddUser(username, userAge);
    setUsername("");
    setUserAge("");
  };
  const usernameChangeHanlder = (e) => {
    setUsername(e.target.value);
  };
  const usernameAgeHandler = (e) => {
    setUserAge(e.target.value);
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
          </div>
          <Button type="sumbit">Add user</Button>
        </form>
      </div>
    </Card>
  );
}

export default AddUser;
