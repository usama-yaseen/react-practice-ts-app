import { Component } from "react";
import "../Styles/UserSearch.css";

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

interface UserSearchState {
  name: string;
  age: number | null;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  //   constructor(props: UserSearchProps) {
  //     super(props);
  //     this.state = {
  //       name: "",
  //       age: null,
  //     };
  //   }
  //   we can also write the state without constructor as we are already passing props to the parent class
  state: UserSearchState = {
    name: "",
    age: null,
    user: undefined,
  };
  //   we can use the below syntax as well without using the interface to type the state
  //   state = {
  //     name: "",
  //     age: null,
  //   };
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    console.log(foundUser);
    this.setState({ user: foundUser });
  };
  render() {
    return (
      <div id="container">
        <h3>User Search</h3>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.onClick();
            }
          }}
        />
        <button onClick={this.onClick}>Search</button>
        <div id="user-list">
          {this.state.user ? (
            <div>
              <h3>{this.state.user.name}</h3>
              <p>{this.state.user.age}</p>
            </div>
          ) : (
            <div>
              <h3>No User Found</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserSearch;
