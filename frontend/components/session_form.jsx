import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
    this.formType = this.props.formType;
  }

  handleInput(type) {
    // debugger
    return (e) => {this.setState({[type]: e.target.value})};
  }

  handleSubmit(e) {
    e.preventDefault();
    const formUser = Object.assign({}, this.state)
    this.props.processForm(formUser);
  }

  render() {
    let submitText;
    let linkPath;
    let linkText;
    let title;

    if (this.formType === 'login') {
      title = 'LOG IN'
      submitText = 'Log in';
      linkPath ='/signup';
      linkText = 'Sign up';
    } else {
      title = 'SIGN UP'
      submitText = 'Sign up';
      linkPath ='/login';
      linkText = 'Log in';
    }

    return (
      <div>
        <h1>{title}</h1>

        <ul>
          {this.props.errors.map(error => (
            <li>{error}</li>
          ))}
        </ul>

        <form onSubmit={(e)=>this.handleSubmit(e)}>

          <label className="username">Username:
            <input
              type="text"
              onChange={this.handleInput('username')}
              value={this.state.username}/>
          </label>
          <label className="password">Password:
            <input
              type="password"
              onChange={this.handleInput('password')}
              value={this.state.password}/>
          </label>

          <input type="submit" value={submitText} />
        </form>
        <br />

        <Link 
          to={linkPath}
          onClick={() => this.handleClick}>
          {linkText}
        </Link>

      </div>
    );
  }
}

export default withRouter(SessionForm);