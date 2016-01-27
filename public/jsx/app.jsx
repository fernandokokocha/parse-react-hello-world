var App = React.createClass({
  getInitialState: function() {
    return {
      user: Parse.User.current(),
      alert: null
    };
  },
  updateUser: function() {
    this.setState({user: Parse.User.current()});
  },
  onUserNotLogged: function(alert) {
    this.setState({alert: alert});
  },
  onLogout: function() {
    Parse.User.logOut();
    this.updateUser();
  },
  render: function() {
    var whenLogged = <AdminPanel onLogout={this.onLogout} user={this.state.user} />;
    var whenNotLogged = <LoginForm onSuccess={this.updateUser} onFailure={this.onUserNotLogged} alert={this.state.alert} />;
    var app = (this.state.user) ? whenLogged : whenNotLogged;
    return (
      <div>
        {app}
      </div>
    );
  }
});
