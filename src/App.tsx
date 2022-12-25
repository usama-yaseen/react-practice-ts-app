import React from "react";
import "./App.css";
// import { StylishName, StylishNameComponent } from "./Components/StylishName";
// import { GuestList } from "./Components/GuestList";
// import { UserSearch } from "./Components/UserSearch";
import { EventComponent } from "./Events/EventComponent";

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
      {/* <UserSearch /> */}
      <EventComponent />
    </>
  );
}

export default App;
