import React from "react";
import TodoCard from "./TodoCard";
import TodoActionButton from "./TodoActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
        border-radius: 3px;
        width: 300px;
        padding: 8px;
        height: "100%";
        margin-right: 8px;
`;

const TodoList = ({ title, cards, listID, index }) => {
    console.log(cards);
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)} type="card">
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>
                                {cards.map((card, index) => (
                                    <TodoCard key={card.id} index={index} text={card.text} id={card.id} />
                                ))}
                                {provided.placeholder}
                                <TodoActionButton listID={listID} />
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default TodoList;
