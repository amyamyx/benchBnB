import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: this.props.currentUser }
  }

  handleClick() {
   
    this.props.logout();
    this.setState({currentUser: null});
  }

  componentDidUpdate() {
    if (this.props.currentUser !== this.state.currentUser) {
      this.setState({currentUser: this.props.currentUser})
    }
  }
  


  render() {
    let a;
    if (this.state.currentUser !== null ) {
      a = (
        <div>
          <p>hello, {this.state.currentUser.username}</p>
          <button onClick={()=>this.handleClick()}>logout</button>
        </div>
       ) 
    } else {
      a = (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In </Link>
        </div>
      )
    }

    return a;
  }
}


export default Greeting;