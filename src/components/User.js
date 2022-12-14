import { Component } from 'react';

import classes from './User.module.css';

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

class User extends Component {
  componentDidMount() {
    console.log('User will unmount!');
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
