import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { onValue } from "firebase/database";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    let starCountRef = this.props.firebase.doGetUsers(); //.then((result) => console.log(result));
    onValue(starCountRef, (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
          <br />
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
          <br />
        </span>
        <span>
          <strong>Username:</strong> {user.username}
          <br />
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);
