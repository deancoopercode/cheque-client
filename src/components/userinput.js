var React = require('react');

var LikeButton = React.createClass({

  getInitialState: function() {
    return { count: 0 };
  },

  doSomething: function() {
    var count = this.state.count + 1;
    this.setState({count: count});
    console.log('im winning');
  },

  render: function() {
    return (
      <h1 className="like">Like
      <span onClick={this.doSomething}>{this.state.count}</span>
      </h1>
    )
  }
  }
);

module.exports = LikeButton;
