import React from "react";

interface StylishNameProps {
  name: string;
  onClick: () => void; //void means that the function will not return anything.
}

interface StylishNameComponentProps {
  name: string;
  handleClick: () => void;
  children: React.ReactNode; //ReactNode is a type that can be anything that can be rendered in React.
}

export const StylishName = (props: StylishNameProps) => {
  return (
    <>
      <h1>Hi {props.name}</h1>
      <button onClick={props.onClick}>Click Me</button>
    </>
  );
};

// StylishName.PropTypes = {
//     name: PropTypes.string.isRequired,
// };
// The above is not needed in TypeScript as we have already defined the type of props.
// also that the above will not work as StylishName is a not yet established as a react component.

// The below is the same as above but the return type is explicitly defined as A React Functional Component.
// here the StylishNameComponent is a React Functional Component and has all the properties of a React Functional Component.
// where as the above is just a function.
export const StylishNameComponent: React.FC<StylishNameComponentProps> = ({
  name,
  handleClick,
  children,
  //children is a special prop that is used to pass the content between the opening and closing tags of the component
  // but here i'm getting an error that children is not defined because i have not defined it in the interface.
  // so we can define it in the interface as well. but we can also use the below method.
}) => {
  return (
    <div>
      <h1>Hi {name}</h1>
      <p>{children}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

StylishNameComponent.displayName = "Name Component"; //displayName is the name of the component that will be shown in the React Dev Tools.

// NOTE: The above is the same as the below. We can use both the above and below methods.
