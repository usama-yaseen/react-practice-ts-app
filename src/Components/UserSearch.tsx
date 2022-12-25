import React, { useEffect, useRef, useState } from "react";
import "../Styles/UserSearch.css";

export const UserSearch: React.FC = () => {
  const ref = useRef<HTMLInputElement | null>(null); //null is used because we don't want to focus on the input field when the page loads.
  const [name, setName] = useState("");
  const UserList = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 20 },
    { name: "Michael", age: 20 },
  ];

  useEffect(() => {
    // ref.current.focus(); //can be null so we need to use ! to tell typescript that we are sure that it is not null.
    // ref.current!.focus(); //this is the same as the above line
    ref.current?.focus(); //this is the same as the above line
    // diff between ref.current.focus() and ref.current!.focus() is that the first one will throw an error if the ref.current is null and the second one will not throw an error.
    // and the diff between ref.current! and ref.current? is that the first one will throw an error if the ref.current is null and the second one will not throw an error.
  }, []);

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
        ref={ref}
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
