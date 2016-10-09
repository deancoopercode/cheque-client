var React = require('react');
var $ = require ('jquery')

export default class UserControl extends React.Component {

  constructor(props) {
     super(props);

     this.state = {
       result: ''
     };

     this.convertNumber = this.convertNumber.bind(this);
     this.updateInputValue = this.updateInputValue.bind(this);
     this.checkForSubmission = this.checkForSubmission.bind(this);
     this.submitRequestToServer = this.submitRequestToServer.bind(this)
   }

  convertNumber(numberToConvert) {
    $.ajax({
      url: "http://localhost:8080/convert/" + numberToConvert,

      success: function(response) {
        this.setState({result: response.result});
      }.bind(this),

      error: function(xhr, status, err) {
        this.setState({result: 'Error calling service, please ensure it is running'});
      }.bind(this)
    });
  }
  submitRequestToServer() {
    this.convertNumber(this.state.inputValue);
  }
  checkForSubmission(event) {
    if(event.key === 'Enter'){
        this.convertNumber(this.state.inputValue);
    }
  }
  updateInputValue = (evt) => {
   this.setState({
     inputValue: evt.target.value
   });
  }
  render() {
    return (
      <div>
      <label htmlFor="inputValue">Please enter amount to convert and press enter or click Submit</label>
      <br/>
      <input className="inputValue" onChange={this.updateInputValue} onKeyPress={this.checkForSubmission}></input>
      <br/>
      <button className="submitButton" onClick={this.submitRequestToServer}>Submit</button>
      <div className="result">{this.state.result}</div>
      </div>
    )
  }
}
