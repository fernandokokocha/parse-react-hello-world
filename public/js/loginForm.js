'use strict';

var LoginForm = React.createClass({
  displayName: 'LoginForm',

  getInitialState: function getInitialState() {
    return {
      email: '',
      password: ''
    };
  },
  onEmailChange: function onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  },
  onPasswordChange: function onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  },
  onSubmit: function onSubmit(e) {
    e.preventDefault();
    var onSuccess = this.props.onSuccess;
    var onFailure = this.props.onFailure;

    Parse.User.logIn(this.state.email, this.state.password, {
      success: function success(user) {
        onSuccess();
      },
      error: function error(user, _error) {
        onFailure(_error.message);
      }
    });
  },
  render: function render() {
    var item = this.props.item;
    if (this.props.alert) {
      var alert = React.createElement(
        'div',
        { className: 'alert alert-danger', role: 'alert' },
        this.props.alert
      );
    }
    return React.createElement(
      'div',
      null,
      alert,
      React.createElement(
        'form',
        { className: 'form-signin', onSubmit: this.onSubmit },
        React.createElement(
          'h2',
          { className: 'form-signin-heading' },
          'Please sign in'
        ),
        React.createElement(
          'label',
          { htmlFor: 'inputEmail', className: 'sr-only' },
          'Email address'
        ),
        React.createElement('input', { type: 'email', id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true, autofocus: true, onChange: this.onEmailChange }),
        React.createElement(
          'label',
          { htmlFor: 'inputPassword', className: 'sr-only' },
          'Password'
        ),
        React.createElement('input', { type: 'password', id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true, onChange: this.onPasswordChange }),
        React.createElement(
          'button',
          { className: 'btn btn-lg btn-primary btn-block', type: 'submit' },
          'Sign in'
        )
      )
    );
  }
});