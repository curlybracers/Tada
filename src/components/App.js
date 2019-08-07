import React, { Component } from 'react';
import TodoList from "./TodoList";
import { connect } from "react-redux";
import TodoActionButton from "./TodoActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";


const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
`


class App extends Component {

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
      source.droppableId,
      destination.drappableId,
      source.index,
      destination.index,
      draggableId
    )
   );
  }

  render() {
    const {  lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h2>Hello TODO</h2> 
        <ListContainer>
        {lists.map(list => (
        <TodoList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
        ))}  
          <TodoActionButton list />
          </ListContainer>
      </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
