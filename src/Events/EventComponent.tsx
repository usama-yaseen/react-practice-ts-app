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
      <input value={value} onChange={onChange} />
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
