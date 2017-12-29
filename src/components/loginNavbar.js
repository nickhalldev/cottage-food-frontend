import React from "react";
import { Menu } from "semantic-ui-react";

const LoginBar = props => {
  return (
    <Menu className="login-menu">
      {props.location === "/login" ? (
        <Menu.Item position="left" name="Sign up" onClick={props.signup} className='ui inverted red button'>
        Sign up here!
        </Menu.Item>
      ) : (
        <Menu.Item position="left" name="To Login" onClick={props.backToLogin} className='ui inverted red button'>
          Back to Login
        </Menu.Item>
      )}
    </Menu>
  );
};

export default LoginBar;
