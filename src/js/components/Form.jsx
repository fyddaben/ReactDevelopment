require('../../scss/index.scss');
var React = require('react');

var Input = React.createClass({
  getInitialState: function() {
    return {
      value: 'Hello!'
    };
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
      <input type="text" value={value} onChange={this.handleChange}/>
      <p>{value} daben ok </p>
      </div>
    )
  }
});

module.exports = Input;
