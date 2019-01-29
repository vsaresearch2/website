import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Option, Radio, RadioGroup, Select } from 'informed';
import axios from 'axios';
import styled from 'styled-components';

import '@atlaskit/css-reset';


const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
`;

const Label = styled.label`
  display:inline-block;
  width: 140px;
  text-align: right;
`;

const Button = styled.button`
  background: green;
  border-radius: 8px;
  color: white;
`;

export default class Preferences extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }

  handleClick() {
    console.log(this.formApi.getState().values);
    //axios.post('http://localhost:3001/api/v1/preferences');

    // will require 400 response from API server
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }


  // Forms are always sent as strings
  render() {
    return (
      <Form id="preferences" getApi={this.setFormApi}>
        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="preferred-school">Preferred School:</ Label>
          <Select field="school" id="select-school">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="uw">University of Washington</Option>
            <Option value="ccc">Cascadia Community College</Option>
            <Option value="ecc">Everett Community College</Option>
            <Option value="other">Other</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="preferred-major">Preferred Major:</ Label>
          <Select field="major" id="select-major">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="art">Art</Option>
            <Option value="css">Computer Science</Option>
            <Option value="mth">Math</Option>
            <Option value="phl">Philosophy</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="max-quarters">Max Number of Quarters:</ Label>
          <Select field="quarters" id="select-quarters">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
            <Option value="13">13</Option>
            <Option value="14">14</Option>
            <Option value="15">15</Option>
            <Option value="16">16</Option>
            <Option value="17">17</Option>
            <Option value="18">18</Option>
            <Option value="19">19</Option>
            <Option value="20">20</Option>
            <Option value="21">Greater than 20</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="core-courses">Core Courses Per Quarter:</ Label>
          <Select field="courses" id="select-courses">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="credits">Credits Per Quarter:</ Label>
          <Select field="credits" id="select-credits">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
            <Option value="13">13</Option>
            <Option value="14">14</Option>
            <Option value="15">15</Option>
            <Option value="16">16</Option>
            <Option value="17">17</Option>
            <Option value="18">18</Option>
            <Option value="19">19</Option>
            <Option value="20">20</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="summer-preference">Summer Quarter:</Label>
          <RadioGroup field="summer">
            <Radio style={{ verticalAlign: "middle", paddingRight: "10px" }} value="yes" id="radio-yes" />
            <Label style={{ paddingLeft: "10px", textAlign: "left" }} htmlFor="radio-summer">Yes</Label>
            <Radio style={{ verticalAlign: "middle", paddingRight: "10px" }} value="no" id="radio-no" />
            <Label style={{ paddingLeft: "10px", textAlign: "left" }} htmlFor="radio-female">No</Label>
          </RadioGroup>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="evening-preference">Evening Classes:</Label>
          <RadioGroup field="evening">
            <Radio style={{ verticalAlign: "middle", paddingRight: "10px" }} value="yes" id="radio-yes" />
            <Label style={{ paddingLeft: "10px", textAlign: "left" }} htmlFor="radio-evening">Yes</Label>
            <Radio style={{ verticalAlign: "middle", paddingRight: "10px" }} value="no" id="radio-no" />
            <Label style={{ paddingLeft: "10px", textAlign: "left" }} htmlFor="radio-female">No</Label>
          </RadioGroup>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="starting-quarter">Starting Quarter:</Label>
          <Select field="quarter" id="select-quarter">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="autumn">Autumn</Option>
            <Option value="winter">Winter</Option>
            <Option value="spring">Spring</Option>
            <Option value="summer">Summer</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="job-type">Job Type:</Label>
          <Select field="job" id="select-job">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="math-1">Full</Option>
            <Option value="math-2">Part</Option>
            <Option value="math-3">None</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="enrollment-type">Enrollment Type:</Label>
          <Select field="enrollment" id="select-enrollment">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="math-1">Full</Option>
            <Option value="math-2">Part</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="select-math">Starting Math:</Label>
          <Select field="math" id="select-math">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="math-1">Math 1</Option>
            <Option value="math-2">Math 2</Option>
            <Option value="math-3">Math 3</Option>
          </Select>
        </Container>

        <Container>
          <Label style={{ paddingRight: "10px" }} htmlFor="select-english">Starting English:</Label>
          <Select field="english" id="select-english">
            <Option value="" disabled>
              Select One...
          </Option>
            <Option value="english-1">English 1</Option>
            <Option value="english-2">English 2</Option>
            <Option value="english-3">English 3</Option>
          </Select>
        </Container>

        <Link to="/train">
          <Button onClick={this.handleClick}>Submit</ Button>
        </Link>
      </Form>
    )
  }
}
