var AdminPanel = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar user={this.props.user} onLogout={this.props.onLogout} />
        <TurboList />
      </div>
    )
  }
});
