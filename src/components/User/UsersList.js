import React from "react";
import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

function UsersList(props) {
  return (
    <Card className={styles.card}>
      <ul>
        {props.users.map((user, idx) => (
          <li key={idx}>
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
