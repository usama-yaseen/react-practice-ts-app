import React, { useEffect, useState } from "react";
import "../Styles/UserSearch.css";

export const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const UserList = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 20 },
    { name: "Michael", age: 20 },
  ];

  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  //we are defining the type of the user state as an array of objects with name and age properties.
  //   undefined is used because we don't want to show the list of users when the user hasn't searched for any user.

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onClick = () => {
    const foundUser = UserList.find((user) => {
      return user.name === name;
    });
    console.log(foundUser);
    setUser(foundUser);
  };

  return (
    <div id="container">
      <h3>User Search</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
      />
      <button onClick={onClick}>Search</button>
      <div id="user-list">
        {user ? (
          <div>
            <h3>{user.name}</h3>
            <p>{user.age}</p>
          </div>
        ) : (
          <div>
            <h3>No User Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};
