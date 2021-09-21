import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

export default function App() {
  const [userInfo, setUserInfo] = useState([]);
  const newUserHandler = (Uname, Uage) => {
    setUserInfo((prevState) => [...prevState, { name: Uname, age: Uage }]);
  };
  return (
    <div className="app">
      <AddUser onAddUser={newUserHandler} />
      <UsersList users={userInfo} />
    </div>
  );
}
