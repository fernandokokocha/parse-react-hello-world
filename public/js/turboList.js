'use strict';

var TurboList = React.createClass({
  displayName: 'TurboList',

  mixins: [ParseReact.Mixin],
  getInitialState: function getInitialState() {
    return { text: '' };
  },
  onChange: function onChange(e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    ParseReact.Mutation.Create('TestObject', {
      foo: this.state.text
    }).dispatch();
    this.setState({ text: '' });
  },
  observe: function observe() {
    return {
      testObjects: new Parse.Query('TestObject').ascending('createdAt')
    };
  },
  render: function render() {
    var onRemove = this.onRemove;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { className: 'form-inline', onSubmit: this.handleSubmit },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'input-task' },
            'Add task'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'input-task', placeholder: 'Do stuff', onChange: this.onChange, value: this.state.text })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary' },
          'Add'
        )
      ),
      React.createElement(
        'table',
        { className: 'table table-striped table-bordered table-hover table-condensed' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'TODO'
            ),
            React.createElement(
              'th',
              null,
              'Remove'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          this.data.testObjects.map(function (item, index) {
            return React.createElement(TurboItem, { item: item, key: item.id });
          })
        )
      )
    );
  }
});