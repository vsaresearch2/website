import React from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { Form, Option, Select } from 'informed';
import axios from 'axios';
import styled from 'styled-components';

import Quarter from './Quarter2';

import '@atlaskit/css-reset';

const FormStyle = styled.div`
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
const Container = styled.div`
    display: flex;
    width: 1000px;
    flex-wrap: wrap;
  `;

const Button = styled.button`
    background: red;
    border-radius: 8px;
    color: white;
  `;

/**
 * Add a page that just displays the data then sends the object to the 
 * Schedule Component
 */
export default class Train extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
    this.setFormApi = this.setFormApi.bind(this);
  }

  async componentDidMount() {
    const schedule = (await axios.get('http://localhost:3001/api/v1/schedules/1')).data;

    // UNPACK
    var classes = schedule.quarters.map(quarter => {
      return quarter.courses;
    });
    var courseList = {};
    classes.forEach(courses => courses.map(course => {
      return courseList[course.id] = course;
    }));
    var quarterList = {};
    var columns = schedule.quarters.map(quarter => {
      return quarter;
    });
    columns.forEach(quarter => {
      quarterList[quarter.id] = quarter;
      quarterList[quarter.id].courses = quarter.courses.map(course => {
        return course.id;
      });
    });

    const data = {
      id: schedule.id,
      date_created: schedule.date_created,
      date_modified: schedule.date_modified,
      academic_year: schedule.academic_year,
      student_id: schedule.student_id,
      metadata: schedule.metadata,
      classes: courseList,
      columns: quarterList,
      columnOrder: schedule.quarters.map(quarter => {
        return quarter.id;
      })
    }

    this.setState(data);
  }

  handleClick = () => {
    const rating = this.formApi.getState().values;
    rating.id = this.state.id;
    console.log(rating);
    //axios.post('http://localhost:3001/api/v1/preferences');
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  render() {
    if (this.state === null) return <p>Loading ...</p>;

    return (
      <Form id="schedule" getApi={this.setFormApi}>

        <DragDropContext>
          <FormStyle>
            <Label style={{ paddingRight: "10px" }} htmlFor="schedule-rating">Schedule Rating:</ Label>
            <Select field="schedule-rating" id="select-rating">
              <Option value="" disabled>
                Select A Score...
          </Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
          </FormStyle>
          <Container>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const classes = column.courses.map(classId => this.state.classes[classId]);

              // will return multiple quarters
              return <Quarter key={column.id} column={column} classes={classes} />
            })}
            <Link to="/schedule">
              <Button onClick={this.handleClick}>Train Model</ Button>
            </Link>
          </Container>
        </DragDropContext>
      </Form>
    );
  }
}
