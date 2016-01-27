var LoginForm = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },
  onEmailChange: function(e) {
    this.setState({
      email: e.target.value
    })
  },
  onPasswordChange: function(e) {
    this.setState({
      password: e.target.value
    })
  },
  onSubmit: function(e) {
    e.preventDefault();
    var onSuccess = this.props.onSuccess;
    var onFailure = this.props.onFailure;

    Parse.User.logIn(this.state.email, this.state.password, {
      success: function(user) {
        onSuccess();
      },
      error: function(user, error) {
        onFailure(error.message);
      }
    });
  },
  render: function() {
    var item = this.props.item;
    if (this.props.alert) {
      var alert = <div className="alert alert-danger" role="alert">{this.props.alert}</div>
    }
    return (
      <div>
        {alert}
        <form className="form-signin" onSubmit={this.onSubmit} >
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus onChange={this.onEmailChange} />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.onPasswordChange} />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    )
  }
});
