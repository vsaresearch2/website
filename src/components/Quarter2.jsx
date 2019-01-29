import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Course from './Course2';


// can be moved into it's own files later as styling components
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const CourseList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}

  flex-grow: 1;
  min-height: 100px;
`;

/**
 * Copied for the live demo.
 */
export default class Quarter extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <CourseList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.classes.map((item, index) => (
                <Course key={item.id} item={item} index={index}/>)
              )}
              {provided.placeholder}
            </CourseList>
          )}
        </Droppable>
      </Container>
    );
  }
}
