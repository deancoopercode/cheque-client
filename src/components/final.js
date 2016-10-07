var React = require('react');
var $ = require ('jquery')
var UserControl = React.createClass({

  getInitialState: function() {
    return { count: 0 };
  },
  convertNumber: function(numberToConvert) {
    $.ajax({
      url: "http://localhost:8080/convert/" + numberToConvert,

      success: function(result) {
        this.setState({result: result.result});
        alert("result");
      }.bind(this),

      error: function(xhr, status, err) {
        console.error("AJAX Call", status, err.toString());
      }.bind(this)
    });
  },
  submitRequestToServer: function() {
    this.convertNumber(this.state.inputValue);
    alert('val ' + this.state.inputValue);
    var count = this.state.count + 1;
    this.setState({count: count});


  },
  updateInputValue: function(evt) {
   this.setState({
     inputValue: evt.target.value
   });
 },
  render: function() {
    return (
      <div>
      <input className="inputValue" onChange={this.updateInputValue}></input>
      <button onClick={this.submitRequestToServer}>Submit</button>
      <div className="result">{this.state.result}</div>
      </div>
    )
  }
  }
);




// http://localhost:8080/convert/33343






module.exports = UserControl;
