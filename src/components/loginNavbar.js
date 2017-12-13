import React from "react";
import { Menu } from "semantic-ui-react";

const LoginBar = props => {
  return (
    <Menu>
      {props.location === "/login" ? (
        <Menu.Item position="left" name="Sign up" onClick={props.signup}>
        Click here to sign up
        </Menu.Item>
      ) : (
        <Menu.Item position="left" name="To Login" onClick={props.backToLogin}>
          Back to Login
        </Menu.Item>
      )}
    </Menu>
  );
};

export default LoginBar;
