import expect from 'expect'
import React, { Component } from 'react';
import SimpleMDEReact from '../index.js';
import TestUtils from 'react-addons-test-utils';

beforeEach(function() {
});

describe('events', () => {

  // class Hello extends Component {
  //
  //   handleChange() {
  //     console.log('hey now');
  //   }
  //
  //   render() {
  //     return (
  //       <SimpleMDEReact
  //         onChange={this.handleChange}
  //         options={{
  //           autofocus: true,
  //           spellChecker: false,
  //           value: 'cheese'
  //         }}
  //       /    >
  //     )
  //   }
  // }


  it('has testing setup', function () {

    const component = TestUtils.renderIntoDocument(<Hello />);

    expect(true).toBe(true);
  });
});
