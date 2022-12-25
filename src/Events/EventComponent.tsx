import { useState } from "react";

export const EventComponent: React.FC = () => {
  const [value, setValue] = useState("");
  const [isDragged, setIsDragged] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("I'm being dragged");
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragged(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragged(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragged(false);
    console.log("Dropped");
  };

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        // Inline functions do not need to be typed. They are inferred by the compiler.
        // but if you are using a function that is not inline, you need to type it.
        // because the compiler cannot infer the type of the function. or more specifically, the type of the event.

        // onChange={(e) => {
        //   setValue(e.target.value);
        //   console.log(e);
        // }}
      />
      <div
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={{ backgroundColor: isDragged ? "red" : "white" }}
      >
        Drag Me
      </div>
    </div>
  );
};
