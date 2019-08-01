import React from "react";
import TodoCard from "./TodoCard";
import TodoActionButton from "./TodoActionButton";

const TodoList = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (
            <TodoCard key={card.id} text={card.text} />
            ))}
            <TodoActionButton />
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}

export default TodoList;
