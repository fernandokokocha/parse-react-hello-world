var TurboList = React.createClass({
  mixins: [ParseReact.Mixin],
  getInitialState: function() {
    return {text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    ParseReact.Mutation.Create('TestObject', {
      foo: this.state.text
    }).dispatch();
    this.setState({text: ''});
  },
  observe: function() {
    return {
      testObjects: (new Parse.Query('TestObject')).ascending('createdAt')
    };
  },
  render: function() {
    var onRemove = this.onRemove;
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="input-task">Add task</label>
            <input type="text" className="form-control" id="input-task" placeholder="Do stuff" onChange={this.onChange} value={this.state.text} />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        <table className="table table-striped table-bordered table-hover table-condensed">
        <thead>
          <tr>
            <th>TODO</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {this.data.testObjects.map(function(item, index) {
            return <TurboItem item={item} key={item.id} />;
          })}
        </tbody>
        </table>
      </div>
    );
  }
});
