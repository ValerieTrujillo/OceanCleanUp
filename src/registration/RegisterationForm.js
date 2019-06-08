import React from "react";
import TextInput from "../common/TextInput";
import { Button, Label } from "reactstrap";

const RegistrationForm = props => {
  return (
    <React.Fragment>
      <Label for="firstName">First Name</Label>
      <TextInput
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.firstName}
        onChange={evt => props.onChange(evt)}
      />
      <Label for="middleInitial">Middle Initial</Label>
      <TextInput
        type="text"
        name="middleInitial"
        placeholder="Middle Initial"
        value={props.middleInitial}
        onChange={evt => props.onChange(evt)}
      />
      <Label for="lastName">Last Name</Label>
      <TextInput
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={props.lastName}
        onChange={evt => props.onChange(evt)}
      />
      <Label for="email">Email</Label>
      <TextInput
        type="text"
        name="email"
        placeholder="Email"
        value={props.email}
        onChange={evt => props.onChange(evt)}
      />
      <Label for="password">Password</Label>
      <TextInput
        type="text"
        name="password"
        placeholder="Password"
        value={props.password}
        onChange={evt => props.onChange(evt)}
      />
      <Button
        tag="a"
        color="success"
        size="large"
        target="_blank"
        onClick={props.handleClick}
      >
        Register
      </Button>
    </React.Fragment>
  );
};
export default RegistrationForm;
