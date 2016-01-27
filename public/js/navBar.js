"use strict";

var NavBar = React.createClass({
  displayName: "NavBar",

  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-inverse navbar-fixed-top" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "button",
            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar" },
            React.createElement(
              "span",
              { className: "sr-only" },
              "Toggle navigation"
            ),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" })
          ),
          React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            "Panel"
          )
        ),
        React.createElement(
          "div",
          { id: "navbar", className: "collapse navbar-collapse" },
          React.createElement(
            "ul",
            { className: "nav navbar-nav" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { onClick: this.props.onLogout },
                "Logout (",
                this.props.user.attributes.username,
                ")"
              )
            ),
            React.createElement(
              "li",
              { className: "active" },
              React.createElement(
                "a",
                null,
                "TODO"
              )
            )
          )
        )
      )
    );
  }
});