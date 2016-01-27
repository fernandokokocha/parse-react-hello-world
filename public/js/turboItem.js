"use strict";

var TurboItem = React.createClass({
  displayName: "TurboItem",

  onRemove: function onRemove(e) {
    ParseReact.Mutation.Destroy(this.props.item).dispatch();
  },
  render: function render() {
    var item = this.props.item;
    return React.createElement(
      "tr",
      { key: item.id },
      React.createElement(
        "td",
        null,
        item.foo
      ),
      React.createElement(
        "td",
        null,
        React.createElement(
          "a",
          { onClick: this.onRemove },
          React.createElement("span", { className: "glyphicon glyphicon-remove", "aria-hidden": "true" })
        )
      )
    );
  }
});