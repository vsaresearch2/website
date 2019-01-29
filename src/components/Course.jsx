import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

  display: flex;
`;

const Handle = styled.div`
  position: relative;
  left: 90%;
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
`;
// margin-right: 8px;

/**
 * Item is the component for each quarter's class.
 */
export default class Course extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provided.dragHandleProps} /* can be used as hamburger icon on left side*/ />
            {this.props.item.title}
          </Container>
        )}
      </Draggable>
    );
  }
}
