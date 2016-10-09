import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import {
	renderIntoDocument,
  findRenderedDOMComponentWithClass,
	findRenderedDOMComponentWithTag,
	Simulate
} from 'react-addons-test-utils';
var TestUtils = require('react-addons-test-utils');
import UserControl from './components/usercontrol.jsx';


describe("Main client test suite", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it("elements present", function() {
    var component = TestUtils.renderIntoDocument(<App />);
    var button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    expect(button).to.be.ok;

    var inputField = findRenderedDOMComponentWithTag(component, 'input');
    expect(inputField).to.be.ok;

    const outputField = findRenderedDOMComponentWithClass(component, 'result');
    expect(outputField).to.be.ok;

  });


//Tried to simulate a proper scenaro with inputted test data then an ajax call
//to the server to get the answer, however i didnt finish it. Also the service
//tests cover these scenarios anyway.

  // it("result div present", function() {
  //   const result = { result: 'ZERO DOLLARS'};
  //
  //   const component = renderIntoDocument(
  //   <App />
  //   );
  //
  //   const inputField = findRenderedDOMComponentWithTag(component, 'input');
  //   const outputField = findRenderedDOMComponentWithClass(component, 'result');
  //   const button = findRenderedDOMComponentWithTag(component, 'button');
  //
  //   expect(inputField).to.be.ok;
  //   expect(button).to.be.ok;
  //
  //   inputField.value = '0';
  //   Simulate.change(inputField);
  //   Simulate.click(button);
  //     expect(outputField).to.equal('ZERO DOLLARS');
  //
  //   waitsFor(() => {
  //       console.log('In waitFor: ' + component.state.inputValue.length);
  //       return component.state.inputValue.length > 0;
  //   }, "commits to be set", 2000);
  //
  //   runs(() => {
  //       expect(component.state.inputValue.length).toEqual(3);
  //   });
  // });
});
