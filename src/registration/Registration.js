import React from "react";
import RegistrationForm from "./RegisterationForm";
import UserService from "../services/UserService";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleInitial: "",
      lastName: "",
      email: "",
      password: ""
    };
  }
  submitHandleClick = evt => {
    console.log("handleClick.Submit", this.state);
    UserService.Register(this.state, this.registerSuccess, this.registerError);
  };
  registerSuccess = resp => {
    console.log("==========Submit Success=======");
    console.log(resp);
  };
  registerError = resp => {
    console.log("========Submit Error===========", resp);
  };
  onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <RegistrationForm
                onChange={this.onChange}
                handleClick={this.submitHandleClick}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Registration;
