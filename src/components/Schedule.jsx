import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { Form, Option, Select } from 'informed';

import styled from 'styled-components';
import axios from 'axios';

import Quarter from './Quarter'


// TODO
// Needs a Academic Year toggle for the different views
// Delete classes?, search for others?
// Planned section?

// Unpack/pack to send data in right format
// Lock 4 columns per row
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
  background: green;
  border-radius: 8px;
  color: white;
`;

/**
 * Schedule holds the columns.
 * 
 * Note that going back will resubmit the page.
 * 
 * TODO: Add placeholders beneath
 */
export default class Schedule extends React.Component {

  constructor(props) {
    super(props);

    this.state = null;
    this.setFormApi = this.setFormApi.bind(this);
  }

  async componentDidMount() {
    //const schedule = (await axios.get('http://localhost:3001/api/v1/schedules/1')).data;
    const response = (await axios.get('http://vaaapi.azurewebsites.net/api/Schedules')).data;
    const schedule = JSON.parse(response);

    console.log(schedule.quarters);
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
    // PACK
    const updatedSchedule = {
      id: this.state.id,
      date_created: this.state.date_created,
      date_modified: this.state.date_modified,
      academic_year: this.state.academic_year,
      student_id: this.state.student_id,
      metadata: this.state.metadata,
      quarters: this.state.columnOrder.map(course => {
        return {
          id: course,
          year: this.state.columns[course].year,
          title: this.state.columns[course].title,
          courses: this.state.columns[course].courses
        }
      })
    }
    updatedSchedule.metadata.rating = this.formApi.getState().values;
    console.log(updatedSchedule);
    //axios.post('http://localhost:3001/api/v1/preferences');
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  // onClick send json with timestamp
  // 4 quarters per column
  onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  };

  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.classes).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newClassIds = Array.from(start.courses);
      newClassIds.splice(source.index, 1);
      newClassIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        courses: newClassIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    const startClassIds = Array.from(start.courses);
    startClassIds.splice(source.index, 1);
    const newStart = {
      ...start,
      courses: startClassIds,
    };

    const finishClassIds = Array.from(finish.courses);
    finishClassIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      courses: finishClassIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render() {
    if (this.state === null) return <p>Loading ...</p>;

    return (
      <Form id="schedule" getApi={this.setFormApi}>

        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >

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
            <Link to="/finish">
              <Button onClick={this.handleClick}>Submit</ Button>
            </Link>
          </Container>
        </DragDropContext>
      </Form>
    );
  }
}
