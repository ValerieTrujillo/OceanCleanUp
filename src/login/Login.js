import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}