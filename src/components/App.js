import React, { Component } from 'react';
import TodoList from "./TodoList";
import { connect } from "react-redux";
import TodoActionButton from "./TodoActionButton";
import { DragDropContext } from "react-beautiful-dnd;"

class App extends Component {

  onDragEnd = () => {
    // TODO: reordering logic
  }

  render() {
    const {  lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h2>Hello TODO</h2> 
        <div style={styles.listsContainer}>
        {lists.map(list => (
        <TodoList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
        ))}  
          <TodoActionButton list />
        </div>
      </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}



const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
