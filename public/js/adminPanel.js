"use strict";

var AdminPanel = React.createClass({
  displayName: "AdminPanel",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(NavBar, { user: this.props.user, onLogout: this.props.onLogout }),
      React.createElement(TurboList, null)
    );
  }
});