"use strict";

var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      user: Parse.User.current(),
      alert: null
    };
  },
  updateUser: function updateUser() {
    this.setState({ user: Parse.User.current() });
  },
  onUserNotLogged: function onUserNotLogged(alert) {
    this.setState({ alert: alert });
  },
  onLogout: function onLogout() {
    Parse.User.logOut();
    this.updateUser();
  },
  render: function render() {
    var whenLogged = React.createElement(AdminPanel, { onLogout: this.onLogout, user: this.state.user });
    var whenNotLogged = React.createElement(LoginForm, { onSuccess: this.updateUser, onFailure: this.onUserNotLogged, alert: this.state.alert });
    var app = this.state.user ? whenLogged : whenNotLogged;
    return React.createElement(
      "div",
      null,
      app
    );
  }
});