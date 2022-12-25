import React from "react";
import "./App.css";
// import { StylishName, StylishNameComponent } from "./Components/StylishName";
// import { GuestList } from "./Components/GuestList";
import { UserSearch } from "./Components/UserSearch";
// import { EventComponent } from "./Events/EventComponent";
// import UserSearch from "./Classes/UserSearch";

function App() {
  return (
    <>
      {/* <StylishName
        name="Aryan"
        onClick={() => {
          alert("Clicked");
        }}
      />
      <StylishNameComponent
        name="Aryan"
        handleClick={() => {
          console.log("Clicked");
        }}
      >
        XYZ
      </StylishNameComponent> */}
      {/* <GuestList /> */}
      <UserSearch />
      {/* <EventComponent /> */}

      {/* Class Based */}
      {/* <UserSearch
        users={[
          { name: "Sarah", age: 20 },
          { name: "Alex", age: 20 },
          { name: "Michael", age: 20 },
        ]}
      /> */}
    </>
  );
}

export default App;
