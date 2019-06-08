import React from "react";
import Registration from "../registration/Registration";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const styles = {
  grow: {
    flexGrow: 1
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Router>
        <AppBar position="static" color="default">
          <Toolbar>
            <div style={{ float: "left" }}>
              <Typography variant="h6" color="inherit">
                Ocean Clean Up!
              </Typography>
            </div>

            <div style={{ float: "right", alignItem: "right" }}>
              <Link to="/registration">
                <Button color="inherit">Register</Button>
                {/* <WhatshotIcon /> */}
              </Link>
            </div>
          </Toolbar>
          
        </AppBar>
        <Route exact path="/registration" component={Registration} />
      </Router>
    );
  }
}

export default NavBar;
