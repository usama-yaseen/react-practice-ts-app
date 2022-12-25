import { useState } from "react";
import "../Styles/Guestlist.css";

export const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  //Type inference is used to infer the type of the variable from the value that is assigned to it.
  //here the type of name is inferred as string.
  const [guests, setGuests] = useState<string[]>([]);
  //if we don't specify the type of the array then it will be inferred as any[].

  const onClick = () => {
    setName("");
    setGuests([...guests, name]); //...guests is the spread operator which is used to copy the array.
  };

  return (
    <div id="container">
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <input
        value={name}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClick();
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};
