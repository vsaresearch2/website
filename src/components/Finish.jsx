import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import '@atlaskit/css-reset';

const Button = styled.button`
  background: green;
  border-radius: 8px;
  color: white;
`;

/**
 * Add a page that just displays the data then sends the object to the 
 * Schedule Component
 */
export default class Finish extends React.Component {
  handleClick() {
    //console.log(this.formApi.getState().values);
    //axios.post('http://localhost:3001/api/v1/train');

    // will require 400 response from API server
  }

  render() {
    return (
      <div>
        <h1>Thank you for your submission!</h1>
        <Link to="/preferences">
          <Button onClick={this.handleClick}>Finish</ Button>
        </Link>
      </div>
    );
  }
}
