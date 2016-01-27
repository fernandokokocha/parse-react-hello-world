var TurboItem = React.createClass({
  onRemove: function(e) {
    ParseReact.Mutation.Destroy(this.props.item).dispatch();
  },
  render: function() {
    var item = this.props.item;
    return (
      <tr key={item.id}>
        <td>
          {item.foo}
        </td>
        <td>
          <a onClick={this.onRemove}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </a>
        </td>
      </tr>
    )
  }
});
